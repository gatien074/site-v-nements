"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="flex lg:blok justify-between items-center w-full h-16 gap-5 ">
        {/* Logo */}
        <div className="rounded-full">
          <Image className="w-10 h-8" src="/Group 11.png" alt="" width={1000} height={1000} />
        </div>
        {/* Liens */}
        <nav className=" text-white lg:flex items-center  hidden md:hidden">
          {/* Desktop */}
          <ul className="flex gap-10">
            <Link href="">
              <li>Accueil</li>
            </Link>
            <Link href="">
              <li>Liste d`évènements</li>
            </Link>
            <Link href="">
              <li>Créer un évènement</li>
            </Link>
            <Link href="">
              <li>Evènement</li>
            </Link>
          </ul>

          <div className="flex gap-5 items-center ml-16">
        <Link href="/formulaire"> <button id="" className="w-40 h-10 bg-transparent/5 rounded-lg hover:bg-white hover:text-black" type="button">
            Inscription
          </button></Link> 
          <button id="" className="w-24 h-8  hover:bg-blue-400 rounded-2xl bg-blue-800" type="button">
            Connexion
          </button>
        </div>
        </nav>
       
      </div>

      {/* mobile  */}
      <button className="lg:hidden md:block block p-5" onClick={toggleMenu}>
        {" "}
        {menuOpen ? (
          <FiX className="w-6 h-6 " />
        ) : (
          <FiAlignRight className="w-6 h-6" />
        )}
      </button>

      {menuOpen && (
        <div className=" text-black  flex-col items-center absolute top-[80px] left-0 w-full ">
          {/* Desktop */}
          <ul className=" flex gap-10 flex-col md:flex-col place-items-end p-5 bg-white ">
            <Link href="">
              <li>Accueil</li>
            </Link>
            <Link href="">
              <li>Liste dévènements</li>
            </Link>
            <Link href="">
              <li>Créer un évènement</li>
            </Link>
            <Link href="">
              <li>Evènement</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
