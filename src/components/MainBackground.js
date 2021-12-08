import React from "react";
import "./MainBackground.css";
import MainNavBar from "./MainNavBar";

export default function MainBackground({ children }) {
  return (
    <div className="main-background">
      <MainNavBar />
      {children}
    </div>
  );
}
