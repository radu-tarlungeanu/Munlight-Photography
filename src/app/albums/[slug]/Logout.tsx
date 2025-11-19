"use client";

export default function Logout({ slug }: { slug: string }) {
  async function handleLogout() {
    await fetch(`/api/albums/logout?slug=${slug}`, { method: "POST" });
    // Send user back to the login page with album prefilled
    window.location.href = `/client?slug=${slug}`;
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border px-4 py-2 text-sm hover:bg-white/10"
      aria-label="Log out"
    >
      Log out
    </button>
  );
}
