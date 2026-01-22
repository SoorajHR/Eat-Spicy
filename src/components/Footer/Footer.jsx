import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.i} alt="" />
          <p>
            Eat Spicy is Bangalore’s ultimate destination for bold flavours and
            fiery cravings. From sizzling starters to spicy mains and
            mouth-watering desserts, we serve food that excites your taste buds.
            Fresh ingredients, fast delivery, and unforgettable taste — only for
            true spice lovers.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            &nbsp;&nbsp;&nbsp;
            <img src={assets.twitter_icon} alt="" /> &nbsp;&nbsp;&nbsp;
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>6968540002</li>
            <li>contactourteam@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
