import React from 'react'
import Image from 'next/image';
import Button from './button';
const Catégories = () => {

    const images = [
        { src: "/image 1.jpg", title: "Mariage", paragraph: 'Célébrité' },
        { src: "/image 2.jpg", title: "Anniversaire" , paragraph: 'Fête'},
        { src: "/image 3.jpg", title: "Reunion familiale" , paragraph: 'Moment pour ce revoir' },
        { src: "/image 4.jpg", title: "Baby showers " , paragraph: "Connaitre le sexe de l'enfant" },
      ];
  return (
    <>
    {/* Titre principal */}
    <div className="flex justify-center text-2xl font-bold text-black mt-9">
        <h1>Catégories</h1>
      </div>

      {/* Images avec titres */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-md text-center"
          >
            {/* Image */}
            <Image
              className="lg:w-48 lg:h-48 w-56 h-56 m-10  shadow-lg shadow-slate-900 lg:flex md:flex flex-col"
              src={image.src}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
            />
            {/* Titre */}
            <p className="mt-2 text-lg font-semibold text-gray-800">
              {image.title}
            </p>
            <p className="mt-2 text-lg font-semibold text-gray-800">
              {image.paragraph}
            </p>
          </div>
        ))}
      </div>
</>
);
};



export default Catégories