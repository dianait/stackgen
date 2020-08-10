import { useState, useEffect } from "react";
import defaultStackComplete from "../data/index";

export function useStack({ keyword }) {
  const [stack, setStack] = useState([]);
  useEffect(() => {
    const defaultStack = defaultStackComplete();
    const icon = `${keyword}.png`;

    if (defaultStack.includes(icon) && !stack.includes(icon)) {
      setStack((prevStack) => prevStack.concat([icon]));
    }
  }, [stack, keyword]);

  return { stack };
}
