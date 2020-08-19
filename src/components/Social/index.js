import React from "react"
import { Container, Icon } from "./style"

export default function Social() {
  return (
    <>
      <Container>
        <a href="https://github.com/DianaIT">
          <Icon src="./social/github.svg" alt="dianait" />
        </a>
        <a href="https://www.instagram.com/dianait_">
          <Icon src="./social/instagram.svg" alt="dianait_" />
        </a>
        <a href="https://www.linkedin.com/in/dianahernandezsoler/">
          <Icon src="./social/linkedin.svg" alt="dianahernandezsoler" />
        </a>
        <a href="https://twitter.com/dianait_">
          <Icon src="./social/twitter.svg" alt="diana_" />
        </a>
        <a href="https://dianait.vercel.app">
          <Icon src="./social/SFlogo.PNG" alt="Series & Front" />
        </a>
      </Container>
    </>
  )
}
