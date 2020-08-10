import { useState, useEffect } from "react";
import { defaultStackSVG } from "../data/index";

export function useStack({ keyword }) {
  const [stack, setStack] = useState([]);
  useEffect(() => {
    const defaultStack = defaultStackSVG;
    const icon = `${keyword}.svg`;

    if (defaultStack.includes(icon) && !stack.includes(icon)) {
      setStack((prevStack) => prevStack.concat([icon]));
    }
  }, [stack, keyword]);

  return { stack };
}
