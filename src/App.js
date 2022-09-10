import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import React from "react";
import Contents from "./Content";
import Home from "./Home";
import Create from "./materialui/Create";
import HomeMUI from "./materialui/HomeMUI";
import { UserProvider } from "./materialui/UserContext";
import Summary from "./materialui/Summary";
import SummaryApi from "./materialui/SummaryApi";
import UserDetail from "./materialui/UserDetail";
import ImageUpload from "./img/ImageUpload";
import ListImage from "./img/ListImage";
import UploadAvatar from "./img/UploadAvatar";
import AddBook from "./materialui/AddBook";
import ListBook from "./materialui/ListBook";
import ImgCus from "./img/ImgCus";
import IconBee from "./img/image/logo.png"

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const menuItems = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "table",
      label: <Link to="/content">Table</Link>,
    },
    {
      label: "Image",
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
      label: "Member",
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
      label: 'Book',
      key: 'book',
      children: [
        { 
          label:( <Link to="/addbook">Add Book</Link>),
          key: 'addbook' 
        },
        { 
          label:( <Link to="/listbook">List Book</Link>),
          key: 'listbook' 
        },
      ],
  },
  ];
  return (
    <UserProvider>
      <div>
        <Layout>
          <Header>
            <img alt="" src={IconBee} width="250px" height="50px" style={{left:0}}/>
          </Header>
          <Layout>
            <Sider>
              <Menu items={menuItems} />
            </Sider>
            <Content>
              {" "}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/content" element={<Contents />} />
                <Route path="/create" element={<Create />} />
                <Route path="/homeM" element={<HomeMUI />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/summaryapi" element={<SummaryApi />} />
                <Route path="/image" element={<ImageUpload />} />
                <Route path="/listbook" element={<ListBook />} />
                <Route path="/userdetail" element={<UserDetail />} />
                <Route path="/listimage" element={<ListImage />} />
                <Route path="/avatar" element={<UploadAvatar />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/gallery" element={<ImgCus />} />
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
