import Image from "next/image";
import Link from "next/link";
import { cloudinary } from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

type CloudinaryResource = {
  secure_url: string;
};

type CloudinarySearchResult = {
  resources: CloudinaryResource[];
};

// Load images from Cloudinary "portfolio" folder
async function getPortfolioImages(): Promise<string[]> {
  try {
    const res = (await cloudinary.search
      .expression("folder:portfolio") // Cloudinary folder name
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute()) as CloudinarySearchResult;

    return res.resources.map((r) => r.secure_url);
  } catch (err) {
    console.error("Error loading Cloudinary images:", err);
    return [];
  }
}

export default async function HomePage() {
  const sampleImages = await getPortfolioImages();

  return (
    <main className="min-h-screen">
      {/* Header (logo + nav + client area) */}
      <header className="w-full px-6 md:px-10 py-0 flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3">
          <Image
            src="/Radu e cel mai smecher.png"
            alt="Munlight Photography"
            width={260}
            height={80}
            className="object-contain cursor-pointer"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link
            href="/#portfolio"
            className="rounded-full border px-4 py-2 hover:bg-white/60"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="rounded-full border px-4 py-2 hover:bg-white/60"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="rounded-full border px-4 py-2 hover:bg-white/60"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full border px-4 py-2 hover:bg-white/60"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-4 md:mx-8 -mt-10 overflow-hidden rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
          alt="Warm wedding couple"
          width={1600}
          height={900}
          className="h-[68vh] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <p className="uppercase tracking-[0.25em] text-xs mb-2">
            Weddings • Couples • Christenings
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-3xl">
            Timeless, honest stories of love &amp; light
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white text-black px-5 py-3 text-sm shadow-sm hover:shadow"
            >
              Book a session
            </Link>
            <Link
              href="/#portfolio"
              className="rounded-full border border-white/70 px-10 py-3 text-sm hover:bg-white/10"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio (Cloudinary) */}
      <section id="portfolio" className="my-20 px-6 md:px-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Featured work</h2>
            <div className="h-1 w-24 bg-[#C7A17A] rounded-full mt-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sampleImages.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}

          {sampleImages.length === 0 && (
            <p className="text-sm text-gray-500">
              No Cloudinary images found in folder <code>portfolio</code>. Add
              photos to that folder in your Cloudinary account.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-10 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Munlight Photography. All rights
            reserved.
          </p>
          <p>Based in the mountains • Available Europe-wide</p>
        </div>
      </footer>
    </main>
  );
}
