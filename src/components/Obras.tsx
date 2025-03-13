import React, { useState } from 'react';

const Slideshow: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  
  const images = [
    { src: '/maria-martins/src/assets/maria_martins.png', alt: 'Snow-capped mountains' },
    { src: '/maria-martins/src/assets/maria.webp', alt: 'City lights at night' },
    { src: '/maria-martins/src/assets/maria_martins.png', alt: 'Mountain landscape' },
    { src: '/maria-martins/src/assets/maria_martins.png', alt: 'Forest path' }
  ];

  const plusDivs = (n: number) => {
    setSlideIndex(prevIndex => {
      const newIndex = prevIndex + n;
      if (newIndex > images.length) return 1;
      if (newIndex < 1) return images.length;
      return newIndex;
    });
  };

  return (
    <div className="h-[100vh]">
      <h2 className="w3-center">Obras</h2>

      <div className="w3-content w3-display-container">
        {images.map((image, index) => (
          <img
            key={index}
            className="mySlides w-full"
            src={image.src}
            alt={image.alt}
            style={{
              display: slideIndex === index + 1 ? 'block' : 'none',
            }}
          />
        ))}

        <button
          className="w3-button w3-black w3-display-left"
          onClick={() => plusDivs(-1)}
        >
          &#10094;
        </button>
        <button
          className="w3-button w3-black w3-display-right"
          onClick={() => plusDivs(1)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
