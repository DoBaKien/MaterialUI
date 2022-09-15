import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import {
  Button,
  TextField,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import swal from "sweetalert";
import Avatar from "react-avatar-edit";

function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [gender, setGender] = useState("female");
  const [rating, setRating] = useState(5);
  const [preview, setPreview] = useState(null);
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:3001/customer/${id}`, {
      name: name,
      details: details,
      gender: gender,
      rating: rating,
      preview: preview,
    }).then((res) => {
      console.log(res);
      swal("Success!", "You have edit successfully!", "success");
      navigate("/summaryapi");
    });
  };

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  return (
    <Container style={{ padding: "20px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Edit member
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div
          style={{ float: "left", marginRight: "200px", marginLeft: "200px" }}
        >
          <Avatar
            width={300}
            height={300}
            onClose={onClose}
            onCrop={onCrop}
            src={null}
            label="Choose avatar"
          />
        </div>
        {preview && (
          <img
            src={preview}
            alt=""
            style={{ marginTop: "80px" }}
            width={150}
            height={150}
          />
        )}
        <Box pb={2}>
          <TextField
            label="Name"
            value={name}
            fullWidth
            margin="normal"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Detail"
            value={details}
            margin="dense"
            fullWidth
            multiline
            rows={3}
            onChange={(e) => setDetails(e.target.value)}
          />
          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          <Rating
            value={rating}
            onChange={(e) => setRating(~~e.target.value)}
          />
        </Box>
        <Button type="submit" variant="contained" startIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default UserEdit;
