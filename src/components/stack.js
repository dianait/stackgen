import React from "react";
import Tech from "./tech";

export default function Stack({ stack }) {
  let id = 0;

  return (
    <section className="stack">
      <h3>My Stack</h3>
      {stack.map((tech) => (
        <Tech key={id++} id={id++} tech={tech} />
      ))}
    </section>
  );
}

//rfc
