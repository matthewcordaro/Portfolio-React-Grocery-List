import React from "react"
import Item from "./Item"

function Items({ items, removeItem, checkItem }) {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            removeItem={removeItem}
            checkItem={checkItem}
          />
        )
      })}
    </div>
  )
}
export default Items
