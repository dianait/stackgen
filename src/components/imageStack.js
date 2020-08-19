import React, { useState } from "react"
import html2canvas from "html2canvas"
import Modal from "./Modal"

export default function ImageStack() {
  const [isGenerated, setIsGenerated] = useState(false)

  const generateImageStack = () => {
    setIsGenerated(true)
    html2canvas(document.querySelector(".stackToImage")).then((canvas) => {
      const modalElement = document.getElementsByClassName("modal")[0]
      modalElement.append(canvas)
    })

    // TODO: Hacer esto con REFS
    const element = document.getElementsByClassName("generateHidden")[0]
    element.style.display = "none"

    const stackClass = document.getElementsByClassName("stackClass")[0]
    stackClass.style.display = "none"
  }

  const resetStackGen = () => {
    window.location.reload(true)
  }

  return (
    <>
      {isGenerated ? (
        <>
          <Modal />
          <span>
            ... Another one?
            <span role="img" aria-label="see right">
              👉
            </span>
          </span>
          <button onClick={resetStackGen}>RESET</button>
        </>
      ) : (
        <>
          <section>
            <span>
              ... when you&apos;re done{" "}
              <span role="img" aria-label="see right">
                👉
              </span>
            </span>
            <button onClick={generateImageStack}>Generate!</button>
          </section>
        </>
      )}
    </>
  )
}
