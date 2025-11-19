import { NextRequest, NextResponse } from "next/server";
import { albums } from "@/lib/albums";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { slug, passcode } = await req.json();
  console.log("LOGIN ATTEMPT =>", { slug, passcode });

  const album = albums.find((a) => a.slug === slug);
  if (!album) {
    console.log("❌ No album found for slug:", slug);
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  console.log("🔹 Album hash length:", album.passcodeHash.length);
  console.log("🔹 Received passcode length:", (passcode ?? "").length);

  const ok = await bcrypt.compare((passcode ?? "").trim(), album.passcodeHash);
  console.log("🔑 Password match:", ok);

  if (!ok) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(`album_${slug}`, "granted", {
    httpOnly: true,
    path: `/albums/${slug}`,
    maxAge: 60 * 60 * 6, // 6 hours
  });
  console.log("✅ Login successful for:", slug);
  return res;
}
