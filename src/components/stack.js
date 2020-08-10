import React from "react";
import Tech from "./tech";

export default function Stack({ stack }) {
  let id = 0;

  return (
    <>
      <h3>My Stack</h3>
      <section className="stack">
        {stack.map((tech) => (
          <Tech key={id++} id={id++} tech={tech} />
        ))}
      </section>
    </>
  );
}

//rfc
