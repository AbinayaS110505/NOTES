// src/components/Img.jsx
import React, { useState } from 'react';

const Img = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="img-page">
  
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" className="uploaded-img" />}
    </div>
  );
};

export default Img;
