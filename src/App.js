import React, { useState } from "react"
import "./App.css"
import Header from "./components/header"
import Stack from "./components/Stack/index"
import SearchTech from "./components/SearchTech"
import ImageStack from "./components/imageStack"
import Social from "./components/Social"
import Login from "./components/Login"

export default function App() {
  // STATES
  const [stack, setStack] = useState([])
  const [nick, setNick] = useState()

  const onSubmit = (stack) => {
    setStack(stack)
  }

  const setUser = (nick) => {
    setNick(nick)
  }

  return (
    <>
      <div className="App">
        <Header title="Stack generator" />
        <Social />

        {nick !== undefined ? (
          <>
            <SearchTech onSubmit={onSubmit} nick={nick} />
            {stack.length > 0 && (
              <>
                <Stack stack={stack} nick={nick} />
                <ImageStack />
              </>
            )}
          </>
        ) : (
          <Login onSubmit={setUser} />
        )}
      </div>
    </>
  )
}
