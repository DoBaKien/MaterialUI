import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Menu, Layout } from 'antd';
import React from 'react';
import Contents from './Content'
import Home from './Home';
import Create from './materialui/Create';
import HomeMUI from './materialui/HomeMUI';
import { UserProvider} from './materialui/UserContext'
import Summary from './materialui/Summary';
import SummaryApi from './materialui/SummaryApi';
import UserDetail from './materialui/UserDetail';
import ImageUpload from './ImageUpload';
import ListImage from './ListImage';
import UploadAvatar from './UploadAvatar';
function App() {

  const { Header, Footer, Sider, Content } = Layout;
  const menuItems = [
    {
        key: 'home',
        label: (
          <Link to="/">Home</Link>
        ),
    },
    {
        key: 'table',
        label: (<Link to="/content">Table</Link>),
    },
    {
      key: 'image',
      label: (<Link to="/image">Image</Link>),
    },
    {
      key: 'listimage',
      label: (<Link to="/listimage">list img</Link>),
    },
    {
      key: 'avatar',
      label: (<Link to="/avatar">Avatar</Link>),
    },
    {
        label: 'Material UI',
        key: 'materialui',
        children: [
          { 
            label:( <Link to="/homeM">Home</Link>),
            key: 'homeM' 
          },
          { 
          label:( <Link to="/create">Create User</Link>),
          key: 'create' 
          },
          {  
            label:( <Link to="/summary">Summary</Link>),
            key: 'summary' 
          },
          {  
            label:( <Link to="/summaryapi">SummaryApi</Link>),
            key: 'summaryapi' 
          },
        ],
    },
];
  return (
    
    <UserProvider>
        <div>
          <Layout>
            <Header> </Header>
            <Layout>
              <Sider>
              <Menu items={menuItems} />
              </Sider>
              <Content> <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/content" element={<Contents />} />
                <Route path="/create" element={<Create />} />
                <Route path="/homeM" element={<HomeMUI />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/summaryapi" element={<SummaryApi />} />
                <Route path="/image" element={<ImageUpload />} />
                <Route path="/userdetail" element={<UserDetail />} />
                <Route path="/listimage" element={<ListImage />} />
                <Route path="/avatar" element={<UploadAvatar />} />
              </Routes></Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </div>
    </UserProvider>
  )
}

export default App;
