import { useState, useEffect } from "react";
import defaultStackComplete from "../data/index";

export function useStack({ keyword }) {
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const defaultStack = defaultStackComplete();
    const url = `${keyword}.png`;

    if (defaultStack.includes(url) && !stack.includes(url)) {
      setStack((prevStack) => prevStack.concat([url]));
    }
  }, [stack, keyword]);

  const msg = stack.includes(`${keyword}.png`)
    ? "Este icono ya lo tienes"
    : "Icono no disponible";

  return { stack, msg };
}
