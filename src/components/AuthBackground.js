import React from "react";
import "./AuthBackground.css";
import MainNavBar from "./MainNavBar"

export default function AuthBackground({ children }) {
  return (
    <div className="auth-bg">
      <MainNavBar />
      {children}
    </div>
  );
}
