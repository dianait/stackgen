import React from "react"

export default function HeaderStack({ nick, checked }) {
  return (
    <>
      {checked && (
        <>
          <h2>
            <span role="img" aria-label="computer">
              💻
            </span>
            {nick}&apos;s stack
          </h2>
        </>
      )}
    </>
  )
}
