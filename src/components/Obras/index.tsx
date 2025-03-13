import  { useState } from 'react';
import obras from './obras'
import { Card } from './Card';
import { Buttons } from './Buttons';

export function Obras() {
  const [slideIndex, setSlideIndex] = useState(0);

  function plusDivs(n: number) {
    console.log(slideIndex);
    
    setSlideIndex(prevIndex => {
      const newIndex = prevIndex + n;
      if (newIndex >= obras.length) return 1;
      if (newIndex < 0) return obras.length;
      return newIndex;
    });
  };

  return (
    <div className="h-[100vh] flex flex-col items-center bg-gray-300 ">
      <h2 className="text-4xl my-15 font-bold">Obras</h2>

      <div>
        {obras.map(({src, name, year, material}, i) => 
          i == slideIndex ? (  
            <Card 
              index={i}
              src={src}
              name={name}
              year={year}
              material={material}
            />
          ) : null
        )}

        <Buttons 
          left={() => plusDivs(-1)} 
          right={() => plusDivs(1)}
        />
      </div>
    </div>
  );
};
