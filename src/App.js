import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Stack from "./components/stack";
import { useStack } from "./hooks/useStack";

export default function App() {
  const [keyword, setKeyword] = useState([]);

  const { stack } = useStack({ keyword });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const tech = document.getElementsByTagName("input")[0].value;
    setKeyword(tech);
    setKeyword("");
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div className="App">
      <Header title="stackGen.io" />
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#282c34" }}>
        <input
          type="text"
          name="keyword"
          placeholder="🔎 Buscar..."
          onChange={handleChange}
          value={keyword}
        />
        <br />
        <br />
        <br />
        <br />
      </form>
      <Stack stack={stack} />
    </div>
  );
}
