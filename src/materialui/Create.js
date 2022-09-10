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
import "../App.css";
import { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import swal from "sweetalert";
import Avatar from "react-avatar-edit";

function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [nameError, setNameError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [gender, setGender] = useState("female");
  const [rating, setRating] = useState(5);
  const { createCustomer } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && details) {
      createCustomer({ name, details, gender, rating, preview });
      swal("Success!", "You have create successfully!", "success");
    }
    if (name === "") setNameError(true);
    if (details === "") setDetailError(true);
  };

  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  useEffect(() => {}, [preview]);

  return (
    <Container style={{ padding: "20px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Create a new member
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
            variant="standard"
            fullWidth
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <TextField
            label="Detail"
            variant="standard"
            fullWidth
            multiline
            rows={3}
            onChange={(e) => setDetails(e.target.value)}
            error={detailError}
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

export default Create;
