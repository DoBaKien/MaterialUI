import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Img1 from "./image/1.jpg";
import Img2 from "./image/2.png";
import Img3 from "./image/3.png";
import Img4 from "./image/4.png";
import Img5 from "./image/5.png";
import Img6 from "./image/6.png";
import Img7 from "./image/7.jpg";
import Img8 from "./image/8.jpg";
import Img9 from "./image/9.png";
const Gallery = () => {
  let imgs = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
  ];

  const viewImage=(imgSrc,i )=>{
    console.log(imgSrc,i );
    setData({imgSrc, i})
  }

  const [data, setData]= useState({img: "", i:0})

  return (
    <>
      {
        data.img && 
        <div style={{
          width:"100%",
          height:"100vh",
          background:"black",
          position:"fixed",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          overflow:"hidden"
        }}>
          <img alt="" src={data.img} style={{width:"auto", maxWidth:"90%", maxHeight:"90%"}}/>
        </div>
      }
      <div style={{padding:"10px"}}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {imgs.map((image, i) => {
              return (
                <img
                  style={{ width: "100%", display: "block", cursor:"pointer" }}
                  key={i}
                  src={image.imgSrc}
                  alt=""
                  onClick={()=>viewImage(image.imgSrc,i)}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
