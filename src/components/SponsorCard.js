import React from "react";
import "./SponsorCard.css";

export default function SponsorCard(props) {
  return (
    <div className="sponsor-card">
      <div className="sponsor-card-background">
        <p className="sponsor-card-number">{props.cardNumber}</p>
        <div className="sponsor-inner-card">
          <div className="sponsor-logo-positioning-div">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
