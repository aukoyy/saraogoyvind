/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button, Carousel } from 'antd';
import Image from "next/image";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

/* 
  4 seksjoner/karuseller
  1. Gjør seg klar
  2. Seremonien
  3. Fotoshoot
  4. Middag og fest

  Shared album from LR: https://adobe.ly/3X5qiog
  Remember to share a quick guide on how to download images from the shared album
*/

export default function ImageGallery() {
  return (
    <main className="min-h-screen mt-12 mx-2 flex justify-center">
      <div className="md:my-24 max-w-screen-md w-full space-y-16">
        <div>
          <h1 className="text-4xl font-bold text-center">Bildegalleri</h1>
          <p className="mt-4 text-center">Velkommen til vårt bildegalleri. Her deler vi et utvalg bilder fra vårt bryllup.</p>
          <p className="mt-4 text-center">
            Om du ønsker å laste ned bilder, trykk på den eksterne lenken og finn de tre prikkene øverst til høyre og trykk "Last ned bilder". 
            Det finnes en tilsvarende knapp i enkeltbildevisning.
          </p>
          <div className='flex justify-center'>
            <Button 
              // href='https://adobe.ly/3X5qiog' 
              target='_blank' 
              type='link' 
              size="large" 
              className="w-full md:w-1/2 font-semibold"
            >
              <p>Vis 372 bilder i eksternt album</p>
              <HiMiniArrowTopRightOnSquare />
            </Button>
          </div>
        </div>
        <Carousel arrows infinite={false} adaptiveHeight draggable >
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
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/images/bryllup-preview1946.jpg"
            alt="Next.js Logo"
            width={1920}
            height={1080}
            priority
          />
      </Carousel>
      <Carousel arrows infinite={false} adaptiveHeight draggable >
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
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/images/bryllup-preview1946.jpg"
          alt="Next.js Logo"
          width={1920}
          height={1080}
          priority
        />
    </Carousel>

      
        
        
      </div>
    </main>
  );
}
