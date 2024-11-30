"use client"

import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Catégories from "./components/catégories";

export default function Home() {
  return (
    <div>
       <Header/>
       <Hero/>
       <Catégories/>
    </div>
  );
}
