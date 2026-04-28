"use client";
import React from "react";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import logo from "@/assest/image/logo.png";
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/photos">All Photos</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex container mx-auto h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className=" flex items-center gap-2">
            <Image
              className="h-12 w-12"
              src={logo}
              alt="nav logo"
              height={200}
              width={300}
            ></Image>
            <h2 className="font-bold text-xl">Pixgen</h2>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}

          <div>
          <Button variant="primary">Sign in</Button>
          <Button className='bg-green-500 ml-2 text-white' variant="">Sign up</Button>
        </div>
        </ul>
        
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}
            <div>
          <Button variant="primary">Sign in</Button>
          <Button className='bg-green-500 ml-2 text-white' variant="">Sign up</Button>
        </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
