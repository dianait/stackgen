import React from "react"

function Tech({ id, tech }) {
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

export default React.memo(Tech)

// rfc
