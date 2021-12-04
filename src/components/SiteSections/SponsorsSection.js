import React from "react";
import "./SponsorsSection.css";
import { Container } from "react-bootstrap";
import SponsorCard from "../SponsorCard";
import FordLogo from "../FordLogo";
import GitHubLogo from "../images/SponsorLogos/GitHub_Logo_White.png";
import GoogleCloudPlatformLogo from "../SvgGoogleCloudLogo";
import StockXLogo from "../images/SponsorLogos/StockX_Gray_Digital_RGB.png";
import AptivLogo from "../images/SponsorLogos/aptiv_logo_rev_orange_rgb.png";
import RocketLogo from "../images/SponsorLogos/rocket.png";

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
            <img
              style={{ height: "auto", width: "10rem" }}
              src={GitHubLogo}
              alt="github logo"
            />{" "}
          </SponsorCard>
          <SponsorCard cardNumber="03">
            {" "}
            <GoogleCloudPlatformLogo />{" "}
          </SponsorCard>
          <SponsorCard cardNumber="04">
            <img
              style={{ height: "auto", width: "100%" }}
              src={StockXLogo}
              alt="stockXLogo"
            />
          </SponsorCard>
          <SponsorCard cardNumber="05">
            {" "}
            <img
              style={{ height: "auto", width: "12rem" }}
              src={AptivLogo}
              alt="aptiv logo"
            />{" "}
          </SponsorCard>
          <SponsorCard cardNumber="06">
            {" "}
            <img
              style={{ height: "auto", width: "12rem" }}
              src={RocketLogo}
              alt="rockerLogo"
            />{" "}
          </SponsorCard>
        </div>
      </Container>
    </div>
  );
}