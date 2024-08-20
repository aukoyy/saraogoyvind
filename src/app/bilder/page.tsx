/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button, Carousel, Input, Modal } from 'antd';
import Image from "next/image";
import { useState } from 'react';
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

export default function ImageGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setWrongPassword(false);
    setPassword('');
  }

  const handleToImagesClicked = () => {
    if (password.toLocaleLowerCase() === process.env.NEXT_PUBLIC_ALBUM_PASSWORD) {
      window.open('https://adobe.ly/3X5qiog', '_blank');
      handleCloseModal();
    } else {
      setWrongPassword(true);
    }
  }

  return (
    <main className="min-h-screen mt-4 mx-4 flex justify-center">
      <div className="md:my-24 mb-36 max-w-screen-md w-full space-y-16">
        <div>
          <h1 className="text-4xl font-bold text-center">Bildegalleri</h1>
          <p className="mt-4 text-center">Velkommen til vårt bildegalleri. Her deler vi et utvalg bilder fra vårt bryllup.</p>
          <p className="mt-4 text-center">
            Om du ønsker å laste ned bilder, trykk på den eksterne lenken og finn de tre prikkene øverst til høyre og trykk "Last ned bilder". 
            Det finnes en tilsvarende knapp i enkeltbildevisning.
          </p>
          <div className='flex justify-center'>
            <Button 
              type='link' 
              size="large" 
              className="w-full md:w-1/2 font-semibold"
              onClick={() => setIsModalOpen(true)}
            >
              <p>Vis 372 bilder i eksternt album</p>
              <HiMiniArrowTopRightOnSquare />
            </Button>
          </div>
        </div>
        <Carousel arrows infinite={false} adaptiveHeight draggable>
          <Image
            src="/images/instaeksport-01.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
            priority
          />
          <Image
            src="/images/instaeksport-02.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-05.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-06.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-07.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-08.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-09.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-10.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-11.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-12.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
          <Image
            src="/images/instaeksport-13.jpg"
            alt="Bilde av bryllup"
            width={1920}
            height={1080}
          />
      </Carousel>

      <div className='md:w-2/3 mx-auto'>
        <Carousel adaptiveHeight arrows infinite={false} draggable>
          <Image
            src="/images/instaeksport-03.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
            priority
          />
          <Image
            src="/images/instaeksport-04.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-14.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-15.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-16.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-17.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-19.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-20.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-21.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-22.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-23.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-24.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-25.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-27.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
        </Carousel>
      </div>

      <Carousel arrows infinite={false} adaptiveHeight draggable>
        <Image
          src="/images/instaeksport-18.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
          priority
        />
        <Image
          src="/images/instaeksport-26.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-28.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-29.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-30.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-31.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-32.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-33.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-34.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-42.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/instaeksport-43.jpg"
          alt="Bilde av bryllup"
          width={1920}
          height={1080}
        />
      </Carousel>

      <div className='md:w-2/3 mx-auto'>
        <Carousel adaptiveHeight arrows infinite={false} draggable>
          <Image
            src="/images/instaeksport-35.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
            priority
          />
          {/* <Image
            src="/images/instaeksport-36.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          /> */}
          <Image
            src="/images/instaeksport-37.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-38.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-39.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-40.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
          <Image
            src="/images/instaeksport-41.jpg"
            alt="Bilde av bryllup"
            width={1080}
            height={1920}
          />
        </Carousel>
      </div>
        
      <Modal 
        title="Nesten der!.." 
        open={isModalOpen} 
        onOk={handleToImagesClicked} 
        onCancel={handleCloseModal}
        destroyOnClose
        okText='Åpne album! -->'
      >
        <p>Skriv inn kode for å åpne alle bilder:</p>
        <Input status={wrongPassword ? 'error' : ''} className='my-4' placeholder='Passord' onChange={
            (e) => { setPassword(e.target.value); setWrongPassword(false)
          }} 
          value={password} />
        {wrongPassword && <p className='text-red-500 font-bold'>Feil passord, prøv igjen</p>}
        
      </Modal>
      </div>
    </main>
  );
}
