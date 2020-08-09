import React from "react";
import Tech from "./tech";

export default function Stack({ stack }) {
  let id = 0;
  console.log("stack length", stack.length);

  return (
    <section className="stack">
      <h2>My Stack</h2>
      {stack.map((tech) => (
        <Tech key={id++} id={id++} tech={tech} />
      ))}
    </section>
  );
}

//rfc
