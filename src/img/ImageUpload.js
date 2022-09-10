import React, { useState } from "react";
import axios from "axios";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
export default function ImageUpload() {
  const [pic, setPic] = useState("");
  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    setPic(fileString);
  };

  const handleApi = () => {
    const formData = new FormData();
    formData.append("image", pic.toString);
    axios.post("http://localhost:3001/image", { image: pic }).then((res) => {
      console.log(res);
    });
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  return (
    <div className="App">
      <input type="file" onChange={onChange} />
      <button onClick={handleApi}>gui</button>
      <br></br>
      <IconButton
        style={{
          background: "none",
          color: "black",
        }}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={onChange}
        />
        <PhotoCamera />
      </IconButton>
      <br></br>
      {pic && (
        <img
          alt=""
          src={pic}
          width="200px"
          height="300px"
          style={{ objectFit: "cover", marginTop: "10px" }}
        ></img>
      )}
    </div>
  );
}
