import Image from "next/image";
import Link from "next/link";
import { thankYouParagraphs } from "./takketekst";
import { Button } from "antd";

export default function Home() {
  return (
    <main className="min-h-screen md:my-12 mx-4 flex justify-center">
      <p>Under arbeid. Sjekk tilbake senere!</p>
      {/* <div className="mt-12 mb-36 md:mt-24 max-w-screen-md space-y-12">
        <h1 className="text-4xl underline text-center">For en dag!</h1>
        <div>  
          {thankYouParagraphs.map((paragraph, index) => (
            <p key={index} className="mt-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex justify-center">
          <Button href="/bilder" type="primary" className="text-center w-full text-lg py-6">
            Til bildegalleri!
          </Button>
        </div>
        <Image
          src="/images/instaeksport-31.jpg"
          alt="Next.js Logo"
          width={1920}
          height={1080}
          priority
        />
      </div> */}

      
    </main>
  );
}
