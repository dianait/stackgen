import React from "react";

export default function Header({ title }) {
  return (
    <header className="App-header">
      <div>
        <img className="logo" src="./stackGen_logo.jpg" alt="logo" />
        <h1>{title}</h1>
      </div>
    </header>
  );
}

//rfc
