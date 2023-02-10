import React, { useState } from 'react'
import '../App.css'


function List() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState([]);
  const [list, setList] = useState([]);
  
  console.log(todos)

  const DeleteList = (e, i) => {
    console.log("I'm deleting this list", i, e)
    // let copy = todos.filter((e, i) => {
    //   se(todos.filter((todos) => i !== i));
    // })
    todos.splice(e, 1, )
    setTodos( [...todos] )
  }
  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo])

  };


  // Add/Remove checked item from list
  const onChangeHandler = (index) => {
    let checkedItem = { value: list[index].value, isChecked: !list[index].isChecked }
    setList([...list.slice(0, index), checkedItem, ...list.slice(index + 1)])
}
  

  return (
    <div>
      <form onSubmit={(e) => {onFormSubmit(e)}}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          value={newTodo}
          required
          onChange={(e) => {
            setNewTodo(e.target.value)}}></input>
        <button type='sumbit '>Add</button>
      </form>
      {
        todos.map((list, index) => {
          return (
            <div key={index}>
              {
                true ?
                <h1>{list.value}</h1> :
               <h1>test</h1>
              }
              {/* <h3>{list}</h3>
              <input type="checkbox"  
              onClick={() => onChangeHandler(index)} 
              checked={list.isChecked}
></input>
            <span className='strikethrough'>{list.value}</span>  */}
              
              <br />
              <button  onClick={() => DeleteList(index)}>Delete</button>
            </div>

          )
        })
      }

    </div>
  )
}


export default List