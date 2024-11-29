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
        <div>
          <Image src="" alt="" width={10} height={10} />
        </div>
        {/* Liens */}
        <nav className=" text-black lg:flex items-center  hidden md:hidden">
          {/* Desktop */}
          <ul className="flex gap-10">
            <Link href="">
              <li>Accueil</li>
            </Link>
            <Link href="">
              <li>Liste dévènement</li>
            </Link>
            <Link href="">
              <li>Créer un évènement</li>
            </Link>
            <Link href="">
              <li>Evènement</li>
            </Link>
          </ul>

          <div className="flex gap-5 items-center ml-16">
          <button className="w-40 h-10 bg-transparent/5" type="button">
            Inscription
          </button>
          <button className="w-40 h-10" type="button">
            Connexion
          </button>
        </div>
        </nav>
       
      </div>

      {/* mobile  */}
      <button className="lg:hidden md:block block p-5" onClick={toggleMenu}>
        {" "}
        {menuOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiAlignRight className="w-6 h-6" />
        )}
      </button>

      {menuOpen && (
        <div className=" text-black  flex-col items-center absolute top-[100px] left-0 w-full ">
          {/* Desktop */}
          <ul className=" flex gap-10 flex-col md:flex-col place-items-end p-5 ">
            <Link href="">
              <li>Accueil</li>
            </Link>
            <Link href="">
              <li>Liste dévènement</li>
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
