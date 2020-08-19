import React from "react"
import { Badget, Container } from "./style"

export default function modal({ display }) {
  return (
    <Container>
      <p>
        Now, just save this <Badget> IMAGE </Badget>
        <span role="img" aria-label="see below">
          👇
        </span>
      </p>
      <div className="modal" style={{ display }}></div>
    </Container>
  )
}
