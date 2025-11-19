import Link from "next/link";
import { FaInstagram, FaFacebook, FaArrowLeft } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 flex justify-center items-start bg-white">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-3xl p-10 border border-slate-200">

        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-3 border border-slate-300 text-slate-700 px-6 py-3 rounded-full hover:bg-slate-100 transition-all w-fit mb-8"
        >
          <FaArrowLeft className="text-lg" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Title */}
        <h1 className="text-5xl font-serif text-center mb-6 text-slate-900">About Me</h1>

        {/* Bio */}
        <p className="text-slate-700 text-center leading-relaxed mb-10">
          Hi! I’m Andrei Munteanu — photographer & videographer based in Romania.
          I specialize in weddings, baptisms, drone cinematography, and lifestyle photography.
          My goal is to capture real emotions, authentic moments, and timeless memories.
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6">

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/munlight.photography"
            target="_blank"
            className="flex items-center gap-3 border border-slate-300 text-slate-700 px-6 py-3 rounded-full hover:bg-slate-100 transition-all"
          >
            <FaInstagram className="text-xl" />
            <span className="text-sm font-medium">@munlight.photography</span>
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/andreimunteanu.photography"
            target="_blank"
            className="flex items-center gap-3 border border-slate-300 text-slate-700 px-6 py-3 rounded-full hover:bg-slate-100 transition-all"
          >
            <FaFacebook className="text-xl" />
            <span className="text-sm font-medium">Andrei Munteanu Photography</span>
          </Link>

        </div>
      </div>
    </main>
  );
}
