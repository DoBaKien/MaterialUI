import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
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

  const [data, setData] = useState({ a: "", i: 0 });
  const viewImage = (imgSrc, i) => {
    console.log(imgSrc);
    console.log(i);
    setData({ imgSrc, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      let next = imgs.find((c) => c.id === i + 1);
      console.log(`next ${next.imgSrc}`);
      console.log(`next id ${next.id}`);
      setData({ imgSrc: next.imgSrc, i: next.id });
    } else if (action === "pre-img") {
      let next = imgs.find((c) => c.id === i - 1);
      console.log(`pre ${next.imgSrc}`);
      console.log(`pre id ${next.id}`);
      setData({ imgSrc: next.imgSrc, i: next.id });
    }
    if (!action) {
      setData({ imgSrc: "", i: 0 });
      console.log("a");
    }
  };

  const [widths, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  });

  let a = widths - 200;
  return (
    <div>
      {data.imgSrc && (
        <div
          style={{
            width: a,
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
          }}
        >
          <button
            onClick={() => {
              imgAction();
            }}
            style={{
              position: "absolute",
              top: 5,
              right: 15,
              background: "black",
              border: "none",
            }}
          >
            <DisabledByDefaultIcon
              fontSize="large"
              style={{ color: "white" }}
            ></DisabledByDefaultIcon>
          </button>

          <button
            onClick={() => imgAction("pre-img")}
            style={{
              left: 10,
              position: "absolute",
              height: "90%",
              background: "black",
              border: "none",
            }}
          >
            <ArrowBackIosTwoToneIcon
              fontSize="large"
              style={{ color: "white" }}
            ></ArrowBackIosTwoToneIcon>
          </button>
          <img
            alt=""
            src={data.imgSrc}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
          <button
            onClick={() => imgAction("next-img")}
            style={{
              right: 10,
              position: "absolute",
              height: "90%",
              background: "black",
              border: "none"
            }}
          >
            <ArrowForwardIosTwoToneIcon
              fontSize="large"
              style={{ color: "white" }}
            ></ArrowForwardIosTwoToneIcon>
          </button>
        </div>
      )}

      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {imgs.map((image, id) => {
              return (
                <img
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  key={id}
                  src={image.imgSrc}
                  alt=""
                  onClick={() => viewImage(image.imgSrc, id)}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Gallery;
