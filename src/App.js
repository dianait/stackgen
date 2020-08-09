import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Stack from "./components/stack";
import { useStack } from "./hooks/useStack";

export default function App() {
  const [keyword, setKeyword] = useState([]);
  const [input, setInput] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    setInput("");
  }, [stack]);

  const handleChange = (evt) => {
    setMessage("");
    setInput(evt.target.value);
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const msg = stack.includes(`${keyword}.png`)
      ? "Este icono ya lo tienes"
      : "Icono no disponible";

    setMessage(msg);
    setInput("");
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
          value={input}
          autocomplete="off"
        />
        <p>{message}</p>
        <br />
        <br />
      </form>
      <Stack stack={stack} />
    </div>
  );
}
