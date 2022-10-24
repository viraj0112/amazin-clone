// import { red } from "@mui/material/colors";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer_button">
      <button>Back to Top</button>
      <div className="footer_container">
        <div className="footer_container1">
          <p>Get to Know Us</p>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Cares</li>
          <li>Gift a Smile</li>
        </div>
        <div className="footer_container1">
          {/**container_2 */ <p>Connect With Us</p>}
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </div>
        <div className="footer_container1">
          {/*container_3 */}
          <p>Make Money With Us</p>
          <li>Sell on Amazon</li>
          <li>Sell Under Amazon Accelerator</li>
          <li>Amazon Global Selling</li>
          <li>Become An Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </div>
        <div className="footer_container1">
          {/*container_4 */}
          <p>Let Us Help You</p>
          <li>Covid-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Center</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Amazon Assistant Download</li>
          <li>Help</li>
        </div>
      </div>
      <div className="footer_logoimage">
        <img
          className="logoimage"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
