import React, { useState, useRef, useEffect } from "react";
import { useStack } from "../hooks/useStack";

export default function Form({ onSubmit: handlerSumitFromParent }) {
  // STATES
  const [keyword, setKeyword] = useState(null);
  const [message, setMessage] = useState(null);

  // REFS
  const inputRef = useRef();

  // HOOKS
  const { stack, msg } = useStack({
    keyword,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setKeyword(evt.target.value);
    setMessage(msg);
    inputRef.current.value = "";
    handlerSumitFromParent(stack);
  };

  // HANDLES
  const handleChange = (evt) => {
    setMessage("");
    inputRef.current.value = evt.target.value;
    setKeyword(evt.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#282c34",
      }}
    >
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
  );
}

//rfc
