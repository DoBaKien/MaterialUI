import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Menu, Layout, Switch } from "antd";
import React, { useState } from "react";
import Contents from "./Content";
import Home from "./Home";
import Create from "./materialui/Create";
import HomeMUI from "./materialui/HomeMUI";
import { UserProvider } from "./materialui/UserContext";
import Summary from "./materialui/Summary";
import SummaryApi from "./materialui/SummaryApi";
import ImageUpload from "./img/ImageUpload";
import ListImage from "./img/ListImage";
import UploadAvatar from "./img/UploadAvatar";
import AddBook from "./materialui/AddBook";
import ListBook from "./materialui/ListBook";
import ImgCus from "./img/ImgCus";
import IconBee from "./img/image/logo.png";
import UserEdit from "./materialui/UserEdit";
import Circle from "./statistics/Circle";
import ColumnDemo from "./statistics/ColumnDemo";
import LineDemo from "./statistics/LineDemo";
import Profile from "./materialui/Profile";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const [theme, setTheme] = useState("dark");
  const [color1, setColor] = useState("white");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
    if (theme === "light") {
      setColor("white");
    } else if (theme === "dark") {
      setColor("black");
    }
  };

  const menuItems = [
    {
      key: "mode",
      label: (
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      ),
    },
    {
      key: "home",
      label: (
        <Link to="/" style={{ color: color1 }}>
          Home
        </Link>
      ),
    },
    {
      key: "table",
      label: (
        <Link to="/content" style={{ color: color1 }}>
          Table
        </Link>
      ),
    },
    {
      label: <div style={{ color: color1 }}>Upload</div>,
      key: "image",
      children: [
        {
          key: "Upload",
          label: <Link to="/image">Upload</Link>,
        },
        {
          key: "listimage",
          label: <Link to="/listimage">list img</Link>,
        },
        {
          key: "gallery",
          label: <Link to="/gallery">Gallery</Link>,
        },
        {
          key: "avatar",
          label: <Link to="/avatar">Avatar</Link>,
        },
      ],
    },
    {
      label: <div style={{ color: color1 }}>Member</div>,
      key: "member",
      children: [
        {
          label: <Link to="/homeM">Home</Link>,
          key: "homeM",
        },
        {
          label: <Link to="/create">Add member</Link>,
          key: "add",
        },
        {
          label: <Link to="/summary">Summary</Link>,
          key: "summary",
        },
        {
          label: <Link to="/summaryapi">SummaryApi</Link>,
          key: "summaryapi",
        },
      ],
    },
    {
      label: <div style={{ color: color1 }}>Book</div>,
      key: "book",
      children: [
        {
          label: <Link to="/addbook">Add Book</Link>,
          key: "addbook",
        },
        {
          label: <Link to="/listbook">List Book</Link>,
          key: "listbook",
        },
      ],
    },
    {
      label: <div style={{ color: color1 }}>Chart</div>,
      key: "chart",
      children: [
        {
          label: <Link to="/circle">Circle</Link>,
          key: "circle",
        },
        {
          label: <Link to="/column">Column</Link>,
          key: "column",
        },
        {
          label: <Link to="/line">Line</Link>,
          key: "line",
        },
      ],
    },
  ];
  return (
    <UserProvider>
      <div>
        <Layout>
          <Header>
            <img
              alt=""
              src={IconBee}
              width="250px"
              height="50px"
              style={{ left: 0 }}
            />
          </Header>
          <Layout>
            <Sider
              style={{
                height: "100%",
                float: "left",
                background: "black",
              }}
            >
              <Menu items={menuItems} theme={theme} />
            </Sider>
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/content" element={<Contents />} />
                <Route path="/create" element={<Create />} />
                <Route path="/homeM" element={<HomeMUI />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/summaryapi" element={<SummaryApi />} />
                <Route path="/image" element={<ImageUpload />} />
                <Route path="/listbook" element={<ListBook />} />
                <Route path="/listimage" element={<ListImage />} />
                <Route path="/avatar" element={<UploadAvatar />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/gallery" element={<ImgCus />} />
                <Route path="/circle" element={<Circle />} />
                <Route path="/column" element={<ColumnDemo />} />
                <Route path="/line" element={<LineDemo />} />
                <Route path="/useredit/:id" element={<UserEdit />} />
                <Route path="/profile/:id" element={<Profile />} />
              </Routes>
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </UserProvider>
  );
}

export default App;
