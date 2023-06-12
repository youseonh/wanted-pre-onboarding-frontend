import React from 'react'

export default function Button({ text, onClick, bgColor, custom }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-${bgColor}-500 hover:bg-${bgColor}-700 text-white font-bold py-2 px-4 rounded ${custom}`}
    >
      {text}
    </button>
  )
}
