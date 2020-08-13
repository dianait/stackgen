import React from "react"

export default function Tech({ id, tech }) {
  return (
    <div className="imgContainer">
      <img
        className="icon"
        key={id}
        src={`./stack/v1.1/${tech}`}
        alt={tech.replace(".svg", "")}
      />
    </div>
  )
}

//rfc
