import React from "react";
import "./FooterSection.css";
//  import SvgShLogoMini from "../ShLogoMini";
import fbIcon from "../images/Logos/FBLogo.png";
import discordIcon from "../images/Logos/DiscordLogo.png";
import mlhIcon from "../images/Logos/mlh-logo-white.png";
import instaIcon from "../images/Logos/Instagram_Glyph_Gradient_RGB.png";
import { SiDevpost } from "react-icons/si";
import { IconContext } from "react-icons";

export default function FooterSection() {
  return (
    <div className="footer-section">
      {/* Grey 1 px line divider */}

      <div className="footer-section-grey-divider"></div>

      <div className="footer-section-second-row">
        {/* <div style={{backgroundColor: "blue"}}>
           <p className="footer-section-thanks-for-visiting">Thanks for Visiting!</p>
         </div> */}

        {/* Spartahack mini Logo */}
        {/* <div className="footer-section-spartahack-mini-logo">
            <a href="https://twitter.com/spartahack?lang=en">
             <img src={twitterIcon} style={{maxWidth: "3.75rem", height: "2rem", marginRight: "2em"}} alt="Facebook Logo"/>
           </a>
         </div> */}

        {/* Social Media Icons */}

        <IconContext.Provider value={{size:'3rem'}}>
          <a href="https://spartahack-vii.devpost.com/">
            <SiDevpost/>
          </a>
        </IconContext.Provider>

        <a href="https://www.instagram.com/msuspartahack/">
          <img
            src={instaIcon}
            className="social-media-icons"
            alt="Facebook Logo"
          />
        </a>

        <a href="https://mlh.io/about">
          <img src={mlhIcon} className="mlh-logo" alt="Facebook Logo" />
        </a>

        <a href="https://discord.com/invite/fq9My3HrW2">
          <img
            src={discordIcon}
            className="social-media-icons"
            alt="Facebook Logo"
          />
        </a>

        <a href="https://www.facebook.com/spartahackmsu/">
          <img
            src={fbIcon}
            className="social-media-icons"
            alt="Facebook Logo"
          />
        </a>

        {/* style={{maxWidth: "3.75rem", height: "2rem", marginRight: "2em"}} */}
        {/* <div className="footer-section-social-media-icons-holder">
           <a href="https://twitter.com/spartahack?lang=en">
             <img src={twitterIcon} className="social-media-icons" alt="Facebook Logo"/>
           </a>

           <a href="https://twitter.com/spartahack?lang=en">
             <img src={twitterIcon} className="social-media-icons" alt="Facebook Logo"/>
           </a>

           <a href="https://twitter.com/spartahack?lang=en">
             <img src={twitterIcon} className="social-media-icons" alt="Facebook Logo"/>
           </a>

           <a href="https://twitter.com/spartahack?lang=en">
             <img src={twitterIcon} className="social-media-icons" alt="Facebook Logo"/>
           </a>

           <a href="https://twitter.com/spartahack?lang=en">
             <img src={twitterIcon} className="social-media-icons" alt="Facebook Logo"/>
           </a>
           <a href="https://ttps://twitter.com/spartahack?lang=en">
             <img src={discordIcon} style={{maxWidth: "3.75rem", height:"2.5rem", marginRight: "2em"}} alt="Discord Logo"/>
           </a>
           <a href="https://www.facebook.com/spartahackmsu/">
             <img src={fbIcon} style={{maxWidth: "3.75rem", height: "2rem"}} alt="Facebook Logo"/>
           </a>
         </div> */}
      </div>

      {/* red dots */}

      <div className="footer-section-red-dots"></div>
    </div>
  );
}
