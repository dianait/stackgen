import React from "react";

export default function Header({ title }) {
  return (
    <header className="App-header">
      <img className="logo" src="./logo.png" alt="logo" />
      <h1>{title}</h1>
    </header>
  );
}

//rfc
