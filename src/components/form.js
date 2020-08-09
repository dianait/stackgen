import React from "react";
import updateStack from "../services/udpdateStack";

export default function Form() {
  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <datalist id="stackList">
        <option value="chrome" />
        <option value="html" />
        <option value="css" />
        <option value="notion" />
        <option value="apple" />
        <option value="dolce" />
        <option value="gitkraken" />
        <option value="angular" />
        <option value="next" />
        <option value="linux" />
        <option value="bose" />
        <option value="msi" />
        <option value="honor" />
        <option value="ts" />
        <option value="js" />
        <option value="vsc" />
      </datalist>
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
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
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
