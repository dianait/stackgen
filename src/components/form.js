import React from "react";
import updateStack from "../services/udpdateStack";

export default function Form() {
  return (
    <form>
      <input
        type="serch"
        list="stackList"
        placeholder="🔎 Buscar..."
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            const url = `${event.target.value}.png`;
            updateStack(url);
          }
        }}
      />
      <br />
      <br />
      <br />
      <br />
    </form>
  );
}

//rfc

/*
    onKeyPress={(event) => {
          if (event.key === "Enter") {
            const tech = event.target.value;
            let src = `${tech}.png`;
            setStack(() => stack.push(src));
          }
        }}
*/
