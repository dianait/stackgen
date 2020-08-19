import React, { useRef } from "react"
import { Form, Name, Label } from "./style"

export default function Login({ onSubmit: setUser }) {
  const nickName = useRef()

  const handleOnSubmit = (evt) => {
    evt.preventDefault()
    setUser(nickName.current.value)
  }

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Label>
          <span role="img" aria-label="hi!">
            👋
          </span>
          Hi there! What&apos;s your name? <br />
          <Name ref={nickName} type="text" placeholder=" 🙎 Your name..." />
        </Label>
      </Form>
    </>
  )
}
