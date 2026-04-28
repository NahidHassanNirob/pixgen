"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { Button } from "@heroui/react";
import logo from "@/assest/image/logo.png";
import Image from "next/image";
import { authClient } from "@/lib/authClient";
import Loading from "@/app/loading";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  // console.log(session.user);
  if (isPending) {
    return <Loading></Loading>;
  }
  const user = session?.user;
  const handelLogOut= async()=>{
    await authClient.signOut()

  }


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
          <Link href={"/"}>
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
          </Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {links}

          {user ? (
            <div className="flex gap-4  items-center">
              <div >
                <Image   className=" rounded-full h-10 w-10"
                src={user.image}
                alt="user image"
                height={30}
                width={30}
              ></Image>
              </div>
              
                <Button onClick={handelLogOut} variant="danger">Logout</Button>
              
            </div>
          ) : (
            <div className="">
              <Link href={"/signin"}>
                <Button variant="primary">Sign in</Button>
              </Link>
              <Link href={"/signup"}>
                <Button className="bg-green-500 ml-4 text-white">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <div>
              <Link href={"/signin"}>
                <Button variant="primary">Sign in</Button>
              </Link>
              <Link href={"/signup"}>
                <Button className="bg-green-500 ml-2 text-white">
                  Sign up
                </Button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
