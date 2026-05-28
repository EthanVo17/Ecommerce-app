'use client';

import React from 'react';

import { ProductGalleryType } from 'types/';

function ProductGallery({ images }: ProductGalleryType) {
  const [mainImage, setMainImage] = React.useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-700 aspect-square rounded-xl flex items-center justify-center text-gray-400 font-medium border border-gray-600 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-transparent opacity-50 z-10"></div>
        {mainImage === 'mock' ? (
          ''
        ) : (
          <img
            src={mainImage}
            alt="Main image"
            className="object-cover w-full h-full"
          />
        )}
        s
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setMainImage(image)}
            className={`bg-gray-700 aspect-square rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition flex items-center justify-center text-xs text-gray-500 overflow-hidden ${mainImage === image ? 'ring-2 ring-blue-500' : ''}`}
          >
            //Mock API image and put it in this
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
