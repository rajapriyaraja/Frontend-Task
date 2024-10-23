import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="footer bg-light text-dark pt-4">
      <div className="container-fluid">
        <div className=" d-flex">
          <div className="col-md-2 mb-3">
            <h5 className="footer-title">Makerble</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">About us</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#" className="footer-link">Privacy & Cookies</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5 className="footer-title">ORGANISATIONS</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Control Panel</a></li>
              <li><a href="#" className="footer-link">Discover the Marketplace</a></li>
              <li><a href="#" className="footer-link">Create Organisation Account</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h5 className="footer-title">YOUR ACCOUNT</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Library</a></li>
              <li><a href="#" className="footer-link">Profile</a></li>
              <li><a href="#" className="footer-link">Projects</a></li>
              <li><a href="#" className="footer-link">Help</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h5 className="footer-title">EXPLORE</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Metrics</a></li>
              <li><a href="#" className="footer-link">Networks</a></li>
              <li><a href="#" className="footer-link">Strategies</a></li>
              <li><a href="#" className="footer-link">Projects</a></li>
              <li><a href="#" className="footer-link">Studies</a></li>
              <li><a href="#" className="footer-link">Surveys</a></li>
              <li><a href="#" className="footer-link">Tips</a></li>
              <li><a href="#" className="footer-link">Voucher</a></li>
            </ul>
          </div>
        
          <div className="col-md-2 mb-3 text-center">
            <h5 className="footer-title">FOLLOW THE MAKERBLE STORY</h5>
            <div className="social-links d-flex justify-content-center">
              <a href="#" className="footer-link me-3"><TiSocialLinkedinCircular className="social-icon" /></a>
              <a href="#" className="footer-link me-3"><AiOutlineYoutube className="social-icon" /></a>
              <a href="#" className="footer-link me-3"><SiInstagram className="social-icon" /></a>
              <a href="#" className="footer-link me-3"><SlSocialTwitter className="social-icon" /></a>
              <a href="#" className="footer-link"><RiFacebookCircleLine className="social-icon" /></a>
            </div>
           
        
          </div>
        </div>
        
      </div>
    
      <div className=" mb-3">
      <div className="justify-content-center mb-5 ">
      <h5 className="footer-title">CONTACT US</h5>
      <a href="mailto:contact@makerble.com" className="footer-link">contact@makerble.com</a>
       <p className='d-flex justify-content-center'>© Makerble 2023</p>
       </div>

      </div>
    </footer >
  );
}

export default Footer;
