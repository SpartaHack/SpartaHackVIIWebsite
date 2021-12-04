import React from "react";
import "./FooterSection.css";
import SvgShLogoMini from "../ShLogoMini";
import fbIcon from "../images/f_logo_RGB-Blue_1024.png"
import discordIcon from "../images/icon_clyde_blurple_RGB.png"
import twitterIcon from "../images/2021 Twitter logo - blue.png"

export default function FooterSection() {
  return (
    <div className="footer-section">

      {/* Grey 1 px line divider */}

      <div className="footer-section-grey-divider"></div>

      <div className="footer-section-second-row">

        {/* Thanks for visiting */}
        <div className="footer-section-thanks-for-visiting">
          <p style={{fontFamily: "Montserrat", fontSize: "25px", fontWeight: 'bold', color: "white"}}>Thanks for Visiting!</p>
        </div>

        {/* Spartahack mini Logo */}
        <div className="footer-section-spartahack-mini-logo">
          <SvgShLogoMini/>
        </div>


        {/* Social Media Icons */}
        <div className="footer-section-social-media-icons-holder">
          <a href="https://twitter.com/spartahack?lang=en">
            <img src={twitterIcon} style={{maxWidth: "3.75rem", height: "2.8125rem", marginRight: "3em"}} alt="Facebook Logo"/>
          </a>
          {/* ADD DISCORD */}
          <a>
            <img src={discordIcon} style={{maxWidth: "3.75rem", height:"2.8125rem", marginRight: "3em"}} alt="Discord Logo"/>
          </a>
          <a href="https://www.facebook.com/spartahackmsu/">
            <img src={fbIcon} style={{maxWidth: "3.75rem", height: "2.8125rem"}} alt="Facebook Logo"/>
          </a>
        </div>
    
      </div>

      {/* red dots */}

      <div className="footer-section-red-dots"></div>





    </div>
  );
}