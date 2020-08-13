import React from "react";

export default function Header({ title }) {
  return (
    <header className="App-header">
      <div>
        <h1>
          <a href="/">🧱</a> {title}
        </h1>
      </div>
    </header>
  );
}

//rfc
