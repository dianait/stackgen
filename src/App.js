import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/header";
import Stack from "./components/stack";
import { useStack } from "./hooks/useStack";
import html2canvas from "html2canvas";
import Modal from "./components/modal";
import modal from "./components/modal";

export default function App() {
  // STATES
  const [keyword, setKeyword] = useState(null);
  const [message, setMessage] = useState(null);
  const [modal, setModal] = useState(false);

  // HOOKS
  const { stack } = useStack({ keyword });

  // REFS
  const inputRef = useRef();

  // EFFECTS
  useEffect(() => {
    inputRef.current.value = "";
  }, [stack]);

  // HANDLES
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

  const handleOnClick = (evt) => {
    const show = modal === "block" ? "none" : "block";
    setModal(show);

    html2canvas(document.querySelector(".stack")).then((canvas) => {
      const m = document.getElementsByClassName("modal")[0];
      m.append(canvas);
    });
  };

  return (
    <div className="App">
      <Header title="stackGen" />
      <Modal show={modal} />
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
