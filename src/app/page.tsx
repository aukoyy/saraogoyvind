import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen mt-12 mx-8">
      <div className="mt-12 md:mt-24 flex justify-center">
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
