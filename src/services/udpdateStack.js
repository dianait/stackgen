export default function (newTechPic) {
  const stack = getCurrentStack();
  stack.push(newTechPic);
  console.log("stack updated", stack);
  return stack;
}

export function getCurrentStack() {
  const stack = defaultStack();
  return stack;
}

function defaultStack() {
  return [
    "apple.png",
    "bose.png",
    "chrome.png",
    "css.png",
    "msi.png",
    "linux.png",
    "notion.png",
  ];
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
