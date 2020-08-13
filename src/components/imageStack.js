import React, { useState } from "react"
import html2canvas from "html2canvas"
import Modal from "./modal"

export default function ImageStack() {
  const [modal, setModal] = useState("none")
  const [message, setMessage] = useState()

  const generateImageStack = () => {
    setModal("block")

    html2canvas(document.querySelector(".stack")).then((canvas) => {
      // TODO: Cambiar usando useRef
      const modalElement = document.getElementsByClassName("modal")[0]
      modalElement.append(canvas)
    })

    // TODO: Cambiar usando useRef
    const stackElement = document.getElementsByClassName("stack")[0]
    stackElement.style.display = "none"
    // TODO: Cambiar usando useRef
    const buttonElement = document.getElementsByTagName("button")[0]
    buttonElement.style.display = "none"

    const onBardText = document.getElementsByClassName("onBoard")
    for (let i = 0; i < onBardText.length; i++) {
      onBardText[i].style.display = "none"
    }

    const resetButton = document.getElementsByClassName("imageStack")[0]
    resetButton.style.display = "block"

    setMessage(
      "Ya tienes listo tu stack, ahora solo tienes que guardar esta imagen y listo 👇"
    )
  }

  const resetStackGen = () => {
    window.location.reload(true)
  }

  return (
    <>
      <span className="onBoard">...y cuando estés listo 👉 </span>
      <button onClick={generateImageStack}>Generate!</button>
      <p style={{ marginBottom: "2rem" }}>{message}</p>
      <Modal show={modal} />
      <button className="imageStack" onClick={resetStackGen}>
        RESET
      </button>
    </>
  )
}
