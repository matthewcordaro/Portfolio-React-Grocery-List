// @ts-nocheck
import { nanoid } from "nanoid"
import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Items from "./Items"
import Form from "./Form"

function setLocalStorage(items) {
  localStorage.setItem("list", JSON.stringify(items))
}

const exampleItem = {
  name: "example",
  completed: false,
  id: nanoid(),
}

const existingList = JSON.parse(localStorage.getItem("list")) || [exampleItem]

const App = () => {
  const [items, setItems] = useState(existingList)

  function addItem(itemName) {
    if (items.some((item) => item.name === itemName))
      throw new Error("Item Exists")
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
  }

  function removeItem(id) {
    const newItems = items.filter((items) => items.id !== id)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.info("Deleted")
  }

  function checkItem(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <>
      <section className='section-center'>
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} checkItem={checkItem} />
      </section>
      <ToastContainer />
    </>
  )
}

export default App
