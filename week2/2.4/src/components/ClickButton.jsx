import { useState } from 'react'

function ClickButton({ onClick }) {
  const [purple, setPurple] = useState(false)

  const handleClick = () => {
    setPurple(true)
    onClick()
  }

  return (
    <button
      type="button"
      className={`click-btn${purple ? ' clicked' : ''}`}
      onClick={handleClick}
      onMouseLeave={() => setPurple(false)}
    >
      Click Me
    </button>
  )
}

export default ClickButton
