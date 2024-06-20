'use client'
import Image from "next/image";

export default function ImageGallery() {
  return (
    <main className="min-h-screen mt-12 mx-8">
      <div className="mt-24 flex flex-col space-y-8">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/bryllup-preview.jpg"
          alt="Next.js Logo"
          width={1920}
          height={1080}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/bryllup-preview1946.jpg"
          alt="Next.js Logo"
          width={1920}
          height={1080}
          priority
        />
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/bryllup-preview0446.jpg"
          alt="Next.js Logo"
          width={1920}
          height={1080}
          priority
        /> */}
      </div>
    </main>
  );
}
