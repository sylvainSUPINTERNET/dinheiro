import { useState } from 'react';

import Image from "next/image";

function PictureGallery() {

  const [images, setImages] = useState([
    { id: 1, url: 'https://via.placeholder.com/500x500?text=Image+1' },
    { id: 2, url: 'https://via.placeholder.com/500x500?text=Image+2' },
    { id: 3, url: 'https://via.placeholder.com/500x500?text=Image+3' },
    { id: 4, url: 'https://via.placeholder.com/500x500?text=Image+4' },
    { id: 5, url: 'https://via.placeholder.com/500x500?text=Image+5' },
    { id: 6, url: 'https://via.placeholder.com/500x500?text=Image+6' },
    { id: 7, url: 'https://via.placeholder.com/500x500?text=Image+7' },
    { id: 8, url: 'https://via.placeholder.com/500x500?text=Image+8' },
    { id: 9, url: 'https://via.placeholder.com/500x500?text=Image+9' },
    { id: 10, url: 'https://via.placeholder.com/500x500?text=Image+10' },
    { id: 11, url: 'https://via.placeholder.com/500x500?text=Image+11' },
    { id: 12, url: 'https://via.placeholder.com/500x500?text=Image+12' },
  ]);


  return (
    <div>
      
    </div>
   );
}

export default PictureGallery;