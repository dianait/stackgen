import { useState, useEffect } from "react";

export function useStack({ keyword }) {
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const url = `${keyword}.png`;
    const defaultStack = defaultStackComplete();

    // Si tenemos imagen y si no está ya en eñ stack del usuario
    if (defaultStack.includes(url) && !stack.includes(url)) {
      setStack((prevStack) => prevStack.concat([url]));
      console.log(`stack updated con ${keyword}`, stack);
    }
  }, [stack, keyword]);

  return { stack };
}

export function defaultStackComplete() {
  return [
    "apple.png",
    "bose.png",
    "chrome.png",
    "css.png",
    "gitkraken.png",
    "dolce.png",
    "html.png",
    "msi.png",
    "linux.png",
    "notion.png",
    "vsc.png",
    "js.png",
    "ts.png",
    "next.png",
    "honor.png",
    "node.png",
    "angular.png",
  ];
}
