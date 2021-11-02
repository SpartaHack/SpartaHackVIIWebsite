import React from "react";
import "./MSUBackground.css";
import NavigationBar from "./NavigationBar";

export default function MSUBackground({ children }) {
  return (
    <div className="msu-bg">
      <NavigationBar />
      {children}
    </div>
  );
}
