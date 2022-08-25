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
                <Route path="/userdetail" element={<UserDetail />} />
              </Routes></Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </div>
    </UserProvider>
  )
}

export default App;
