import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/header";
import Stack from "./components/stack";
import { useStack } from "./hooks/useStack";
import html2canvas from "html2canvas";

export default function App() {
  const [keyword, setKeyword] = useState([]);
  const inputRef = useRef();
  const [message, setMessage] = useState();
  const { stack } = useStack({ keyword });

  useEffect(() => {
    inputRef.current.value = "";
  }, [stack]);

  const handleChange = (evt) => {
    setMessage("");
    inputRef.current.value = evt.target.value;
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const msg = stack.includes(`${keyword}.png`)
      ? "Este icono ya lo tienes"
      : "Icono no disponible";

    setMessage(msg);
    inputRef.current.value = "";
  };

  const handleOnClick = () => {
    html2canvas(document.querySelector(".stack")).then((canvas) => {
      document.body.appendChild(canvas);
    });
  };

  return (
    <div className="App">
      <Header title="stackGen" />
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#282c34" }}>
        <input
          ref={inputRef}
          type="text"
          name="keyword"
          placeholder="🔎 Buscar..."
          onChange={handleChange}
          autoComplete="off"
        />
        <p className="msg">{message}</p>
        <br />
        <br />
      </form>
      <button onClick={handleOnClick}>Generate!</button>

      <Stack className="stack" stack={stack} />
    </div>
  );
}
