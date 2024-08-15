'use client'
import Image from "next/image";
import { Carousel } from 'antd';

/* 
  4 seksjoner/karuseller
  1. Gjør seg klar
  2. Seremonien
  3. Fotoshoot
  4. Middag og fest
*/

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function ImageGallery() {
  return (
    <main className="min-h-screen mt-12 mx-2 flex justify-center">
      <div className="my-24 max-w-screen-md w-full">
        <Carousel arrows infinite={false}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/images/bryllup-preview.jpg"
            alt="Next.js Logo"
            width={1920}
            height={1080}
            priority
          />
          
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/images/bryllup-preview0446.jpg"
            alt="Next.js Logo"
            width={1920}
            height={1080}
            priority
          />
      </Carousel>

      {/* <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/images/bryllup-preview1946.jpg"
            alt="Next.js Logo"
            width={1920}
            height={1080}
            priority
          /> */}
        
        
      </div>
    </main>
  );
}
