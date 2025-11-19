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

// Load images from Cloudinary
async function getPortfolioImages(): Promise<string[]> {
  try {
    const res = (await cloudinary.search
      .expression("folder:portfolio") // Cloudinary folder
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute()) as CloudinarySearchResult;

    return res.resources.map((r) => r.secure_url);
  } catch (err) {
    console.error("Error loading Cloudinary images:", err);
    return [];
  }
}

// IMPORTANT: async function
export default async function HomePage() {
  const sampleImages = await getPortfolioImages();

  return (
    <main className="min-h-screen">
      {/* ...your existing JSX... */}
    </main>
  );
}
