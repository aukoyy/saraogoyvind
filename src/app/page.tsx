import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen mt-12 mx-8">
      <div className="flex justify-center">
        <nav className="flex flex-col md:flex-row md:space-x-4 px-12 py-4 bg-gray-500 text-white rounded-full shadow w-fit">
          <Link href="/">Bildegalleri</Link>
          <Link href="https://bryllupside.webflow.io/">Bryllupssiden</Link>
          <Link href="https://bryllupside.webflow.io/hold-date">Hold the date</Link>
        </nav>
      </div>

      <div className="mt-24">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/bryllup-preview.jpg"
          alt="Next.js Logo"
          width={1920}
          height={1080}
          // sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      
    </main>
  );
}
