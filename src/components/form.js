import React from "react";

export default function Form() {
  return (
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
  );
}

//rfc
