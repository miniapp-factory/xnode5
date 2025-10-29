import { description, title, url } from "@/lib/metadata";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${url}/icon.png`,
          width: 1200,
          height: 630,
          alt: "XnodeOS logo",
        },
      ],
    },
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          title: "Launch Mini App",
          action: {
            type: "launch_miniapp",
            name: title,
            url: url,
            splashImageUrl: `${url}/icon.png`,
            iconUrl: `${url}/icon.png`,
            splashBackgroundColor: "#000000",
            description: description,
            primaryCategory: "utility",
            tags: [],
          },
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-12 px-4 py-8 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
            XnodeOS
          </h1>
          <p className="text-lg lg:text-xl text-gray-300">
            Secure, no‑code deployment on a NixOS‑based operating system.
          </p>
          <a
            href="#get-started"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Get Started
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581093588401-5c1b1b3b5b5e?auto=format&fit=crop&w=800&q=80"
            alt="XnodeOS dashboard"
            className="rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1517430816045-df4b7b5b5b5b?auto=format&fit=crop&w=400&q=80"
              alt="No-code interface"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">No‑Code Deployment</h3>
            <p className="text-gray-300">
              Deploy applications with a single click, no scripting required.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1521791136065-7879d3366b23?auto=format&fit=crop&w=400&q=80"
              alt="Security lock"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Built‑in Security</h3>
            <p className="text-gray-300">
              Hardened by default with SELinux, AppArmor, and hardened kernel
              modules.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1517430816045-5b5b5b5b5b5b?auto=format&fit=crop&w=400&q=80"
              alt="NixOS package manager"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">NixOS Powered</h3>
            <p className="text-gray-300">
              Declarative configuration, reproducible builds, and atomic
              upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581093588401-5c1b1b3b5b5e?auto=format&fit=crop&w=800&q=80"
            alt="Security dashboard"
            className="rounded-xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold">Maximum Security</h2>
          <p className="text-lg text-gray-300">
            XnodeOS integrates industry‑leading security practices out of the
            box. From secure boot to mandatory access control, every layer is
            hardened to protect your data.
          </p>
        </div>
      </section>

      {/* No‑Code Deployment Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          Deploy with a Click
        </h2>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517430816045-5b5b5b5b5b5b?auto=format&fit=crop&w=800&q=80"
            alt="Deployment screen"
            className="rounded-xl shadow-2xl w-full max-w-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started" className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to try XnodeOS?</h2>
        <a
          href="#"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Download Now
        </a>
      </section>
    </main>
  );
}
