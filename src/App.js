import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Login from './Components/Login';
import Register from './Components/Register';
import Product from './Components/Product';
import Profile from './Components/Profile';
import Complain from './Components/Complain';
import Logout from './Components/Logout';
import Detail from './Components/Detail';
import PrivateRoute from './Components/PrivateRoute';

// import Compnav from './Components/Compnav';
import logo from './Components/pic/logo.jpeg';




function App() { 
  return (
    <BrowserRouter>
      <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img className="card-img-top justify-content-center"  src={logo}alt="" style={{width: '40px'}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <Nav.Link as={Link} to={"/"} ></Nav.Link>
    <Nav.Link as={Link} to={"/Register"} ></Nav.Link>
    <Nav.Link as={Link} to={"/Product"} >Product</Nav.Link>
      <Nav.Link as={Link} to={"/Complain"} >Complain</Nav.Link>
      <Nav.Link as={Link} to={"/Profile"} >Profile</Nav.Link>
      <Nav.Link as={Link} to={"/Logout"} >Logout</Nav.Link>
      <Nav.Link as={Link} to={"/Detail"} ></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/" element={<PrivateRoute/>}>
        <Route path="/Product" element={<Product/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Complain" element={<Complain/>} />
        <Route path="/Detail" element={<Detail/>} />
        <Route path="/Logout" element={<Logout/>} />
        
        
        </Route> 
        
      </Routes>
    </BrowserRouter>
  );
}



export default App;