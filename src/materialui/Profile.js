import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./Profile.css";
import Img11 from "../img/image/11.jpg";
import { Button, IconButton, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
function Profile() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [gender, setGender] = useState("female");
  const [rating, setRating] = useState(5);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const url = "http://localhost:3001/customer/";
  useEffect(() => {
    Axios.get(url + id).then((res) => {
      setName(res.data.name);
      setDetails(res.data.details);
      setGender(res.data.gender);
      setRating(res.data.rating);
      setPreview(res.data.preview);
    });
  }, [id]);

  const UpdateUser = () => {
    navigate(`/useredit/${id}`);
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
  }, [widths]);
  //   let widthinfo = widths - 218;

  if (widths < 1089) {
    var widthinfo = widths - 218;
    var avatar_box = {
      width: widthinfo,
      textAlign: "center",
      height: "450px",
    };
    var avatar = {
      textAlign: "center",
    };
    var widthbutton = {
      width: widths - 218,
    };
    var button_info = widths / 3 - 8;
    var button_info2 = "20px";
    var button_info3 = "90px";
    var button_info4 = "20px";
    var edit = {
      right: 100,
      marginTop: "310px",
    };
    var detailsbox = {
      marginTop: "400px",
    };
  } else {
    var widthcoverphoto = widths - 218;
    avatar_box = {
      width: widthcoverphoto,
      height: "200px",
    };
    avatar = {
      float: "left",
      height: "200px",
      marginLeft: "50px",
    };
    edit={
      top:0, 
      left:0
    }
    button_info = "200px";
    detailsbox = {
      marginTop: "120px",
    };
  }

  return (
    <>
      <div
        className="info"
        style={{ width: widthcoverphoto}}
      >
        <img src={Img11} alt="" width="100%" height="300px" />

        <div className="avatar_box" style={avatar_box}>
          <div>
            <div style={avatar}>
              <img
                src={preview}
                alt=""
                className="avatar"
                style={{ marginRight: "50px", marginLeft: "35px" }}
              />
            </div>
            <IconButton aria-label="delete"  onClick={UpdateUser}>
              <CameraAltIcon style={edit} />
            </IconButton>
            <h2 className="name">{name}</h2>
            <h2 className="name">{widthinfo}</h2>
            <Rating value={rating} readOnly />
          </div>
          <div
            className="info_user"
            style={{
              marginTop: "50px",
              width: widthbutton,
              height: "40px",
              float: "left",
              textAlign: "center",
            }}
          >
            <div
              style={{
                float: "left",
                width: button_info,
              }}
            >
              <Button variant="text" style={{ width: button_info2 }}>
                0 Posts
              </Button>
            </div>
            <div
              style={{
                width: button_info,
                float: "left",
              }}
            >
              <Button variant="text" style={{ width: button_info3 }}>
                240 Followers
              </Button>
            </div>
            <div
              style={{
                width: button_info,
                float: "left",
              }}
            >
              <Button variant="text" style={{ width: button_info3 }}>
                900 Following
              </Button>
            </div>
          </div>
        </div>
        <div className="edit" style={edit}>
          <div
            style={{
              width: button_info4,
              float: "left",
            }}
          ></div>
        </div>
      </div>

      <div className="body" style={detailsbox}></div>
      <div className="content" style={detailsbox}></div>
      <div>{name}</div>
      <div>{details}</div>
      <div>{gender}</div>
      <div>{rating}</div>
      <div hidden>{preview}</div>
    </>
  );
}

export default Profile;
