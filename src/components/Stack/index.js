import React, { useRef, useState } from "react"
import Tech from "../tech"
import { StackComponent } from "./style"
import HeaderStack from "../../components/HeaderStack"

function Stack({ stack, nick }) {
  const includeName = useRef()
  const [checked, setChecked] = useState(false)

  const togleName = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <div className="stackClass">
      <label>
        Include your name
        <input type="checkbox" onChange={togleName} ref={includeName} />
      </label>

      <section>
        <div className="stackToImage">
          <HeaderStack nick={nick} checked={checked} />
          <StackComponent className="stack">
            {stack.map((tech, index) => (
              <Tech key={index} id={index} tech={tech} />
            ))}
          </StackComponent>
        </div>
      </section>
    </div>
  )
}

export default React.memo(Stack)
