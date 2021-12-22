import React from "react";
 import "./FooterSection.css";
//  import SvgShLogoMini from "../ShLogoMini";
 import fbIcon from "../images/Logos/FBLogo.png"
 import discordIcon from "../images/Logos/DiscordLogo.png"
 import twitterIcon from "../images/Logos/TwitterLogo.png"

 export default function FooterSection() {
   return (
     <div className="footer-section">

       {/* Grey 1 px line divider */}

       <div className="footer-section-grey-divider"></div>

       <div className="footer-section-second-row">
         <div style={{backgroundColor: "blue"}}>
           <p className="footer-section-thanks-for-visiting">Thanks for Visiting!</p>
         </div>

         {/* Spartahack mini Logo */}
         <div className="footer-section-spartahack-mini-logo">
            <a href="https://twitter.com/spartahack?lang=en">
             <img src={twitterIcon} style={{maxWidth: "3.75rem", height: "2rem", marginRight: "2em"}} alt="Facebook Logo"/>
           </a>
         </div>


         {/* Social Media Icons */}
         <div className="footer-section-social-media-icons-holder">
           <a href="https://twitter.com/spartahack?lang=en">
             <img src={twitterIcon} style={{maxWidth: "3.75rem", height: "2rem", marginRight: "2em"}} alt="Facebook Logo"/>
           </a>
           <a href="https://ttps://twitter.com/spartahack?lang=en">
             <img src={discordIcon} style={{maxWidth: "3.75rem", height:"2.5rem", marginRight: "2em"}} alt="Discord Logo"/>
           </a>
           <a href="https://www.facebook.com/spartahackmsu/">
             <img src={fbIcon} style={{maxWidth: "3.75rem", height: "2rem"}} alt="Facebook Logo"/>
           </a>
         </div>

       </div>

       {/* red dots */}

       <div className="footer-section-red-dots"></div>





     </div>
   );
 }