import { MouseEventHandler } from "react"

interface props {
  left: MouseEventHandler
  right: MouseEventHandler
}

export function Buttons({ left, right }: props) {
  return (
    <div className="mt-3">
      <button
        className="size-10 text-2xl"
        onClick={left}
      >
        &#10094;
      </button>
      <button
        className="size-10 text-2xl"
        onClick={right}
      >
        &#10095;
      </button>
    </div>
  )
}