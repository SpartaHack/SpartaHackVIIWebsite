import React from "react";
import "./MSUBackground2.css";
import NavigationBar from "./NavigationBar";

export default function MSUBackground2({ children }) {
  return (
    <div className="msu-bg2">
      <NavigationBar />
      {children}
    </div>
  );
}
