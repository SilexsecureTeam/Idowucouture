import React from 'react';
import golf from '../assets/golf.png';
import golf4 from '../assets/golf4.png';
import golf5 from '../assets/golf5.png';
import image from '../assets/image.png';
import image2 from '../assets/image2.png';
import golf6 from '../assets/golf6.png';

const Image = () => {
  const images = [
    { id: 1, img: golf6, alt: 'Image 1' },
    { id: 2, img: image2, alt: 'Image 2' },
    { id: 3, img: golf4, alt: 'Image 3' },
    { id: 4, img: golf, alt: 'Image 4' },
    { id: 5, img: image, alt: 'Image 5' },
    { id: 6, img: golf5, alt: 'Image 6' },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {images.map((image) => (
          <div key={image.id} className=" overflow-hidden">
            <img
              src={image.img}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
