import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Stack from "./components/stack";
import { defaultStackComplete } from "./hooks/useStack";

/* import { useStack } from "./hooks/useStack"; */

export default function App() {
  const [keyword, setKeyword] = useState([]);
  const [stack, setStack] = useState(["angular.png", "js.png"]);

  /*   const { stack } = useStack({ keyword }); */

  useEffect(() => {
    const url = `${keyword}.png`;
    const defaultStack = defaultStackComplete();

    // Si tenemos imagen y si no está ya en eñ stack del usuario
    if (defaultStack.includes(url) && !stack.includes(url)) {
      stack[stack.length] = url;
      console.log(`stack updated con ${keyword}`, stack);
      setStack(stack);
    }
  }, [stack, keyword]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const tech = document.getElementsByTagName("input")[0].value;
    setKeyword(tech);
  };
  /*   const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
 */
  return (
    <div className="App">
      <Header title="stackGen.io" />
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#282c34" }}>
        <input
          /*           onChange={handleChange} */
          type="text"
          name="keyword"
          placeholder="🔎 Buscar..."
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
