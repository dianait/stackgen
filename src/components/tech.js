import React from "react";

export default function Tech({ id, tech }) {
  return (
    <img
      key={id++}
      src={`./stack/${tech}`}
      alt={tech.replace(".png", "")}
      width="49px"
      height="49px"
    />
  );
}

//rfc
