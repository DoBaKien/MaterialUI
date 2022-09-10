import {
  Button,
  TextField,
  Box,
  Rating,
  Select,
  Chip,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Tooltip,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import swal from "sweetalert";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function AddBook() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [nameError, setNameError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [rating, setRating] = useState(5);
  const { addBook } = useContext(UserContext);
  const [genres, setGenres] = useState([]);
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [selected, setSelected] = useState([]);
  const [pic, setPic] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then((data) => data.json())
      .then((data) => setGenres(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && details) {
      addBook({ name, details, selected, rating, pic });
      swal("Success!", "You have create successfully!", "success");
      document.getElementById("myForm").reset();
      setPic("");
    }
    if (name === "") setNameError(true);
    if (details === "") setDetailError(true);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setSelected(value);
  };

  const onChangeImg = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const onLoad = (fileString) => {
    setPic(fileString);
  };

  return (
    <Container style={{ padding: "20px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Create a new book
      </Typography>
      <form id="myForm" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div style={{ marginBottom: "30px" }}>
          <IconButton
            style={{
              background: "none",
              color: "black",
            }}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" onChange={onChangeImg} />
            <Tooltip title="Choose Image" placement="left">
              <PhotoCamera fontSize="large" />
            </Tooltip>
          </IconButton>
          {pic && <img alt="" src={pic} width="20%" height="300px"></img>}
        </div>

        <Box pb={2}>
          <TextField
            style={{ marginBottom: "20px" }}
            label="Name"
            variant="standard"
            fullWidth
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-chip-label">Genre</InputLabel>
            <Select
              fullWidth
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {genres.map((name) => (
                <MenuItem
                  key={name.id}
                  value={name.genre}
                  style={getStyles(name, personName, theme)}
                >
                  {name.genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            style={{ marginTop: "20px", marginBottom: "20px" }}
            label="Detail"
            variant="standard"
            fullWidth
            multiline
            rows={3}
            onChange={(e) => setDetails(e.target.value)}
            error={detailError}
          />

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

export default AddBook;
