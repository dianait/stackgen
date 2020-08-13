import React, { useState } from "react"
import "./App.css"
import Header from "./components/header"
import Stack from "./components/stack"
import Form from "./components/form"
import ImageStack from "./components/imageStack"
import Footer from "./components/footer"

export default function App() {
  // STATES
  const [stack, setStack] = useState([])

  const onSubmit = (stack) => {
    setStack(stack)
  }

  return (
    <div className="App">
      <Header title="Stack generator" />
      <Footer />
      <Form onSubmit={onSubmit} />
      <Stack className="stack" stack={stack} />
      <ImageStack />
    </div>
  )
}
