import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 bg-brand-bg text-brand-text">
      <section className="max-w-2xl mx-auto">

        {/* Back Button - same style as About */}
        <Link
          href="/"
          className="flex items-center gap-3 border border-slate-300 text-slate-700 px-6 py-3 rounded-full hover:bg-slate-100 transition-all w-fit mb-8 bg-white"
        >
          <FaArrowLeft className="text-lg" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <h1 className="font-serif text-4xl mb-6">Book a Session</h1>

        <p className="text-brand-muted mb-8">
          Inca putin iar povestea ta v-a vorbi prin imagini!.
        </p>

        <form
          action="https://formspree.io/f/xanlrewe"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent"
          ></textarea>

          <button
            type="submit"
            className="rounded-full border px-4 py-2 hover:bg-white/60"
          >
            Trimite!
          </button>
        </form>

        <p className="text-sm text-brand-muted mt-8">
          Preferi alta metoda de contact? Ne poti scrie pe whatsapp la +407656204651{" "}
          <Link href="mailto:munlight@example.com" className="underline">
            munlight@example.com
          </Link>
        </p>
      </section>
    </main>
  );
}
