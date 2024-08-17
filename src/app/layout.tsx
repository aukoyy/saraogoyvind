'use client'
import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dropdown } from "antd";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import Head from "next/head";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Det ble oss!",
  description: "Sara og Øyvinds bryllupsside",
}; */

const mobileLinkStyle = "text-lg font-semibold text-gray-600 w-fit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const items: any = [
    {
      key: '1',
      label: (
        <Link className={mobileLinkStyle} href="/">Hjem</Link>
      ),
    },
    /* {
      key: '2',
      label: (
        <Link className={mobileLinkStyle} href="/bilder">Bildegalleri</Link>
      ),
    }, */
    {
      key: '3',
      label: (
        <Link 
          target="_blank"
          className={classNames(mobileLinkStyle, 'flex items-center space-x-2')} 
          href="https://bryllupside.webflow.io/"
        >
          <p>Bryllupssiden</p>
          <HiMiniArrowTopRightOnSquare />
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link 
          className={classNames(mobileLinkStyle, 'flex items-center space-x-2')} 
          href="https://bryllupside.webflow.io/hold-date"
          target="_blank"
        >
          <p>Hold the date</p>
          <HiMiniArrowTopRightOnSquare />
        </Link>
      ),
    },
  ];
  return (
    <html lang="en">
      <head>
        <title>Det ble oss!</title>
      </head>
      <body className={inter.className}>
        {/* mobile */}
        <div className="flex justify-end md:hidden" >
          <Dropdown 
            menu={{ items }} 
            arrow className="m-4" 
            open={showMobileMenu} 
            onOpenChange={() => setShowMobileMenu(!showMobileMenu)}
            // onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu 
              ? <XMarkIcon className="w-8 text-gray-600" onClick={() => setShowMobileMenu(!showMobileMenu)} />
              : <Bars3Icon className="w-8 text-gray-600" onClick={() => setShowMobileMenu(!showMobileMenu)} />
            }
            {/* <Bars3Icon className="w-8 text-gray-600" /> */}
          </Dropdown>
          
          
        </div>
        {/* desktop */}
        <div className="md:flex justify-center mt-12 hidden">
          <nav className="flex px-12 py-4 bg-gray-500 text-white rounded-full shadow w-fit font-semibold">
            <Link href="/">Hjem</Link>
            {/* <Link className="border-l-2 border-white ml-4 pl-4" href="/bilder">Bildegalleri</Link> */}
            <Link 
              target='_blank' 
              className="border-l-2 border-white ml-4 pl-4 flex items-center space-x-2" 
              href="https://bryllupside.webflow.io/"
            >
              <p>Bryllupssiden</p>
              <HiMiniArrowTopRightOnSquare />
            </Link>
            <Link 
              target='_blank' 
              className="border-l-2 border-white ml-4 pl-4 flex items-center space-x-2" 
              href="https://bryllupside.webflow.io/hold-date"
            >
              <p>Hold the date</p>
              <HiMiniArrowTopRightOnSquare />
            </Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
