"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

type ServiceKey = "drone" | "photo";

const services: Record<
  ServiceKey,
  {
    name: string;
    image: string;
    prices: { label: string; value: string }[];
  }
> = {
  drone: {
    name: "Drone Photo / Video",
    image: "/services/drone.jpg",
    prices: [
      { label: "30 min flight", value: "€80" },
      { label: "1 hour flight", value: "€140" },
      { label: "Property package", value: "€220" },
    ],
  },
  photo: {
    name: "Photo & Video",
    image: "/services/photo.jpg",
    prices: [],
  },
};

const photoPackageGroups = [
  {
    label: "Botez",
    columns: 2,
    packages: [
      {
        name: "Pachet 1",
        price: "700€",
        items: [
          "1 fotograf",
          "1 videograf",
          "ședință foto bebe acasă",
          "500 – 700 poze editate",
          "prezență eveniment – până la tort",
          "video scurt 3 – 5 min.",
          "video lung aprox. 2 – 3h",
        ],
      },
      {
        name: "Pachet 2",
        price: "800€",
        items: [
          "1 fotograf",
          "1 videograf",
          "ședință foto bebe acasă",
          "500 – 700 poze editate",
          "prezență eveniment – până la tort",
          "video scurt 3 – 5 min.",
          "video lung aprox. 2 – 3h",
          "1 album foto 30x30cm, 26 pagini (copertă personalizată)",
        ],
      },
    ],
  },
  {
    label: "Nuntă",
    columns: 3,
    packages: [
      {
        name: "Pachet 1",
        price: "1500€",
        items: [
          "1 fotograf",
          "1 videograf",
          "500 – 800 poze editate",
          "cadre cu drona",
          "prezență eveniment – până la tort",
          "video scurt 3 – 5 min.",
          "video lung aprox. 3h",
          "1 album foto 21x21cm, 26 pagini (copertă personalizată)",
        ],
      },
      {
        name: "Pachet 2",
        price: "1600€",
        items: [
          "1 fotograf",
          "1 videograf",
          "500 – 800 poze editate",
          "cadre cu drona",
          "prezență eveniment – până la tort",
          "video scurt 3 – 5 min.",
          "video lung aprox. 3h",
          "1 album foto 30x30cm, 26 pagini (copertă personalizată)",
          "1 album foto 21x21cm, 26 pagini (copertă personalizată – pentru nași/părinți)",
        ],
      },
      {
        name: "Pachet 3",
        price: "1850€",
        items: [
          "2 fotografi",
          "1 videograf",
          "600 – 900 poze editate",
          "cadre cu drona",
          "prezență eveniment – până la tort",
          "video scurt 3 – 5 min.",
          "video lung aprox. 3h",
          "1 album foto 30x30cm, 26 pagini (copertă personalizată)",
          "1 album foto 21x21cm, 26 pagini (copertă personalizată – pentru nași/părinți)",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState<ServiceKey | null>(null);
  const activeService = active ? services[active] : null;

  return (
    <main className="relative min-h-screen px-6 md:px-12 py-12 overflow-hidden bg-white text-slate-900">
      {/* blurred background când e activ un serviciu */}
      {activeService && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src={activeService.image}
            alt={activeService.name}
            fill
            priority
            className="object-cover blur-xl scale-110 opacity-70 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Buton Back în stilul About */}
      <div className="relative z-10 max-w-5xl mx-auto mb-6">
        <Link
          href="/"
          className="flex items-center gap-3 border border-slate-300 text-slate-700 px-6 py-3 rounded-full hover:bg-slate-100 transition-all w-fit bg-white/80 backdrop-blur"
        >
          <FaArrowLeft className="text-lg" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      <section className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-center text-5xl md:text-6xl mb-3 font-serif">
          Services
        </h1>

        <p className="text-slate-600 mb-10">
          Choose your experience — tap a photo to see prices and book.
        </p>

        {/* Service tiles */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 ${active ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            }`}
        >
          {(Object.entries(services) as [
            ServiceKey,
            (typeof services)["drone"]
          ][]).map(([key, service]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className="group block text-left focus:outline-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 ${active === key
                      ? "scale-110 brightness-75"
                      : "group-hover:scale-105"
                    }`}
                />
              </div>

              <h3 className="text-2xl mt-4 font-serif transition-colors duration-300 group-hover:text-[#C7A17A] text-center">
                {service.name}
              </h3>
            </button>
          ))}
        </div>
      </section>

      {/* Overlay prețuri */}
      {activeService && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
          <div className="pointer-events-auto max-w-5xl w-full mx-4 rounded-3xl bg-black/90 border border-white/15 backdrop-blur-2xl p-8 md:p-10 shadow-2xl text-white">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-semibold">{activeService.name}</h2>

              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-sm text-gray-300 hover:text-white"
              >
                Close
              </button>
            </div>

            {active === "photo" ? (
              <div className="space-y-8 text-left">
                {photoPackageGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-xl font-semibold mb-4 tracking-wide">
                      {group.label}
                    </h3>

                    <div
                      className={`grid gap-6 grid-cols-1 ${group.columns === 2
                          ? "md:grid-cols-2"
                          : "md:grid-cols-3"
                        }`}
                    >
                      {group.packages.map((pkg) => (
                        <div
                          key={pkg.name}
                          className="h-full flex flex-col rounded-2xl border border-white/20 bg-white/10 px-5 py-4 md:px-6 md:py-5 shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                        >
                          <div className="flex items-baseline justify-between mb-3">
                            <span className="font-semibold text-sm md:text-base">
                              {pkg.name}
                            </span>
                            <span className="font-semibold text-sm md:text-base">
                              {pkg.price}
                            </span>
                          </div>

                          <ul className="mt-1 space-y-1.5 text-[13px] md:text-sm leading-relaxed text-gray-100 flex-1">
                            {pkg.items.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-[3px] text-xs">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3 text-left">
                {activeService.prices.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between border-b border-white/10 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-sm md:text-base text-gray-200">
                      {item.label}
                    </span>
                    <span className="font-semibold text-sm md:text-base">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <Link href={`/contact?service=${active}`} className="block mt-6">
              <button
                type="button"
                className="w-full rounded-full border border-white/70 px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                Book this service
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
