import React, { useState } from "react"

function Item({ item, removeItem, checkItem }) {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => checkItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  )
}
export default Item
