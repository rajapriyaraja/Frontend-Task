import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const ButtonGrid = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleBookingClick = () => {
    navigate('/Booking/Slot'); // Navigate to SlotGrid component
  };

  const handleQuery=()=>{
    navigate("/faquser")
  }
  const handleContact=()=>{
    navigate("/contactus")
  }
  const handleBoard=()=>{
    navigate("/section")
  }
  return (
    <div className="button-grid">
      <button className="grid-button" onClick={handleBoard}>15 CONTACT</button>
      <button className="grid-button" onClick={handleBookingClick}>ZXDFCGVBH</button> 
      {/* <button className="grid-button" onClick={handleQuery}>FREQUENTLY ASKED QUESTIONS</button>
      <button className="grid-button" onClick={handleContact}>CONTACT US</button>
      <button className="grid-button">PARKING IN RESTRICTED TRAFFIC ZONES/LOW EMISSIONS ZONE (ZBE)</button>
      <button className="grid-button">ABOUT OUR PRODUCTS</button>
      <button className="grid-button">PARCLICK BOOKING</button>
      <button className="grid-button ">BOOK WITH RENTAL CAR</button> */}
      
    </div>
  );
};

export default ButtonGrid;
