import React from 'react';
import './Navbar.css'; // Create a custom CSS file for additional styling
import { Navbar, Nav, Form, FormControl, Button, Image, Dropdown } from 'react-bootstrap';
import { FaBell, FaEnvelope, FaSearch, FaUserCircle, FaPlus, FaArrowUp, FaEllipsisH } from 'react-icons/fa';
import { TbSquareNumber1Filled, TbSquareNumber4Filled } from "react-icons/tb";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import logo from "../Asserts/logo.png"

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" width={40} height={40} className='ms-5' rounded />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div class="dropdown">
            <Nav.Link className='fs-5'> My Apps</Nav.Link>
            <div class="dropdown-content">
              <p>App 1</p>
              <p>App 2</p>
              <p>App 3</p>
            </div>
          </div>

          <Nav.Link className='fs-5' href="#home">Home</Nav.Link>
          <Nav.Link className='fs-5' href="#explore">Explore</Nav.Link>
        </Nav>
        <Form inline className="search-form">
          <FormControl type="text" placeholder="Search for contacts or..." className="mr-sm-2 w-75 " />
        </Form>
        {/* Right-aligned section */}
        <Nav className="ms-auto">
          <Nav.Link href="#notifications" className="icon-link">
            <FaBell />
            <TbSquareNumber1Filled className="icon-number" />
          </Nav.Link>
          <Nav.Link href="#messages" className="icon-link">
            <MdOutlineMessage />
          </Nav.Link>
          <Nav.Link href="#notifications" className="icon-link">
            <AiFillThunderbolt />
            <TbSquareNumber4Filled className="icon-number" />
          </Nav.Link>
          <Nav.Link href="#user" className="icon-link fs-5">
            <FaUserCircle /> Brown
          </Nav.Link>
          <Button variant="danger" className="ms-2 me-1"><FaPlus className="mr-1" /> Create</Button>
          <Button variant="outline-secondary" className="ml-3 me-2"><IoIosStarOutline className="mr-1" /> Upgrade</Button>
          <Button variant="outline-primary" className="ml-3 me-1"><MdOutlineFormatListBulleted className="mr-1" /> More</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
