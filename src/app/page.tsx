import Image from "next/image";
import Link from "next/link";
import { thankYouParagraphs } from "./takketekst";

export default function Home() {
  return (
    <main className="min-h-screen md:my-12 mx-4 flex justify-center">
      <div className="mt-12 md:mt-24 max-w-screen-md space-y-12">
        <h1 className="text-4xl underline text-center">For en dag!</h1>
        <div>  
          {thankYouParagraphs.map((paragraph, index) => (
            <p key={index} className="mt-4">
              {paragraph}
            </p>
          ))}
        </div>
        <Image
          src="/images/instaeksport-31.jpg"
          alt="Next.js Logo"
          width={1920}
          height={1080}
          priority
        />
      </div>

      
    </main>
  );
}
