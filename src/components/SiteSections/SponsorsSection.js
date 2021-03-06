import React from "react";
import "./SponsorsSection.css";
import { Container } from "react-bootstrap";
import SponsorCard from "../SponsorCard";
import FordLogo from "../images/Logos/FordLogo";
import kelloggsLogo from "../images/Logos/kelloggs_logo.png"
import MSUITLogo from "../images/Logos/MSUIT-logo.png"
import TwilloQuestLogo from "../images/Logos/twillo_quest_logo.png"
import MSUFCULogo from "../images/Logos/MSUFCU_LOGO.png"
import KLANDALogo from "../images/Logos/KL&A_LOGO.png"
import AOLogo from "../images/Logos/AO_LOGO.svg"
import StellantisLogo from "../images/Logos/Logo_Stellantis_Neg_RGB.png"


export default function SponsorsSection() {
  return (
    <div className="sponsors-section" id="Sponsors">
      <Container className="sponsors-section-container pt-5">
        <div className="sponsors-section-header-underline-container">
          <p className="sponsors-section-header-text"> Sponsors </p>
          <div className="sponsors-section-header-text-underline"></div>
        </div>
      </Container>
      <Container className="pt-5">
        <div className="sponsors-cards-holder-one">
          <SponsorCard cardNumber="01">
            {" "}
            <FordLogo />{" "}
          </SponsorCard>
          <SponsorCard cardNumber="02">
            <img src={kelloggsLogo} style={{height: "3.5em", width: "auto"}} alt="kelloggs logo"></img>
          </SponsorCard>
          <SponsorCard cardNumber="03">
            <img src={MSUITLogo} style={{height: "3.5em", width: "auto"}} alt="MSUIT logo"></img>
          </SponsorCard>
        {/* </div> */}
        {/* <div className="sponsors-cards-holder-two"> */}
          <SponsorCard cardNumber="04">
            <img src={TwilloQuestLogo} style={{height: "5.5em", width: "auto"}} alt="TwilloQuest logo"></img>
          </SponsorCard>
          <SponsorCard cardNumber="05">
            <img src={MSUFCULogo} style={{height: "6em", width: "auto"}} alt="MSUFCU logo"></img>
          </SponsorCard>
          <SponsorCard cardNumber="06">
            <img src={KLANDALogo} style={{height: "5.75em", width: "auto"}} alt="KL AND A logo"></img>
          </SponsorCard>
          <SponsorCard cardNumber="07">
            <img src={AOLogo} style={{height: "3.5em", width: "auto"}} alt="Auto Owners logo"></img>
          </SponsorCard>
          <SponsorCard cardNumber="08">
            <img src={StellantisLogo} style={{height: "5.5em", width: "auto"}} alt="StellantisLogo"></img>
          </SponsorCard>
        </div>
      </Container>
    </div>
  );
}
