import React from "react";
import "./SponsorsSection.css";
import { Container } from "react-bootstrap";
import SponsorCard from "../SponsorCard";
import GCP from "../images/Logos/gcp.png";
import Echo3D from "../images/Logos/echo3D.png";

export default function PartnersSection (){
    return (
        <div className="sponsors-section" id="Partners">
            <Container className="sponsors-section-container pt-5">
                <div className="sponsors-section-header-underline-container">
                    <p className="sponsors-section-header-text"> Partners </p>
                    <div className="sponsors-section-header-text-underline"></div>
                </div>
            </Container>
            <Container className="pt-5">
                <div className="sponsors-cards-holder-one">
                    <SponsorCard cardNumber="01">
                        <img src={GCP} style={{height: "9em", width: "auto"}} alt="GCP logo"></img>
                    </SponsorCard>
                    <SponsorCard cardNumber="02">
                        <img src={Echo3D} style={{height: "2.5em", width: "auto"}} alt="Echo3D logo"></img>
                    </SponsorCard>
                </div>
            </Container>
        </div>
    );
}