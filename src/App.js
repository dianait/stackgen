import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/header";
import Stack from "./components/stack";
import { useStack } from "./hooks/useStack";
import html2canvas from "html2canvas";
import Modal from "./components/modal";
import Form from "./components/form";

export default function App() {
  // STATES
  const [modal, setModal] = useState(false);
  const [stack, setStack] = useState([]);

  const handleOnClick = (evt) => {
    setModal("block");

    html2canvas(document.querySelector(".stack")).then((canvas) => {
      const modalElement = document.getElementsByClassName("modal")[0];
      modalElement.append(canvas);
    });
  };

  const onSubmit = (stack) => {
    setStack(stack);
  };

  return (
    <div className="App">
      <Header title="stackGen" />
      <Modal show={modal} />
      <Form onSubmit={onSubmit} />
      <button onClick={handleOnClick}>Generate!</button>
      <Stack className="stack" stack={stack} />
    </div>
  );
}
