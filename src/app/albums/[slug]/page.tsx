import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import { albums } from "@/lib/albums";
import Logout from "./Logout";

export default async function AlbumPage({ params }: { params: { slug: string } }) {
  const album = albums.find((a) => a.slug === params.slug);
  if (!album) notFound();

  // Folder path
  const folder = path.join(process.cwd(), "public", "albums", album.slug);

  // Read image files from the folder
  const files = fs
    .readdirSync(folder)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b));

  const images = files.map((file) => `/albums/${album.slug}/${file}`);

  return (
    <main className="px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-3xl font-semibold">{album.title}</h1>
        <Logout slug={album.slug} />
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt={album.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
