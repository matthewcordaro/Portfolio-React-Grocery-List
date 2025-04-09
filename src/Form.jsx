import React, { useState } from "react"
import { toast } from "react-toastify"

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("")

  function submissionHandler(e) {
    e.preventDefault()
    if (!newItemName) {
      toast.error("Please provide an item")
      return
    }
    try {
      addItem(newItemName)
      toast.success(newItemName + " added")
      setNewItemName("")
    } catch (error) {
      toast.error(error.message)
      return
    }
  }

  return (
    <form onSubmit={submissionHandler}>
      <h4>Grocery List</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type='submit' className='btn'>
          Add Item
        </button>
      </div>
    </form>
  )
}
export default Form
