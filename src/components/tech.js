import React from "react";

export default function Tech({ id, tech }) {
  return (
    <img
      className="icon"
      key={id}
      src={`./stack/v1.1/${tech}`}
      alt={tech.replace(".png", "")}
      width="49px"
      height="49px"
    />
  );
}

//rfc
