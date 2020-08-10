import React from "react";
import Footer from "./footer";

export default function Header({ title }) {
  return (
    <header className="App-header">
      <div>
        <img className="logo" src="./logo.png" alt="logo" />
        <h1>{title}</h1>
      </div>
      <Footer />
    </header>
  );
}

//rfc
