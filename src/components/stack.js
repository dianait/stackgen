import React from "react"
import Tech from "./tech"

export default function Stack({ stack }) {
  let id = 0

  return (
    <>
      <p className="onBoard">...aquí aparecerán los iconos 👇 </p>
      <section className="stack">
        {stack.map((tech) => (
          <Tech key={id++} id={id++} tech={tech} />
        ))}
      </section>
    </>
  )
}

// rfc
