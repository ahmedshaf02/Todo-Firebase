

import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addTodoData,getTodoData,removeTodoData, updateTodoData} from "./Redux/actionCreators";

const Styles={
todoValue:{
  border:"2px solid black",
  height:50,
  borderRadius:4,
  padding:"0 20px",
  fontSize:18

},
todoButton:{
  background:"black",
  borderRadius:4,
  padding:"10px 20px",
  border:"none",
  outline:"none",
  color:"white",
  fontSize:18,
  margin:10
},
todoHeading: {
  fontSize: 40
},
todoList: {
  padding: 16,
  borderRadius: 5,
  backgroundColor: "#FA058B",
  width: 300,
  fontSize: 18,
  borderRight: "1px solid white",
  margin: 2
},
statusButton: {
  padding: 16,
  borderRight: "1px solid white",
  backgroundColor: "#FA058B",
  borderRadius: 5,
  fontSize: 18,
  outline: "none"
},
listContainer:{
  display: "flex", justifyContent: "center", background:"#F5FBFC ",margin:10,padding:10
}
}

const Todo =()=>{

  const [value,setValue] = useState("")
  const dispatch = useDispatch()
  const store = useSelector(state=> state)
  // console.log(store)
  const todo = store.todo

  // console.log(todo)
  
  useEffect(()=>{
      dispatch(getTodoData())
  },[value])
  return(
    <>

      <h1>Todo List</h1>
        <input style={Styles.todoValue} value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button style={Styles.todoButton} onClick={()=>{
          if(value ===""){
            alert("please add todo")
          }else{
            dispatch(addTodoData(value))
          setValue("") }}
          }
          >
            add todo
      </button>
     
      <div>
        
        {todo.length ? "" : "add todo list here"}
        {todo &&
          todo.map(ele => (
            <div
              key={ele.id}
              style={Styles.listContainer}
            >
              <span style={Styles.todoList}>{ele.name}</span>
               <button
                style={Styles.statusButton}
                onClick={() => dispatch(updateTodoData(ele.id))}
              >
                {ele.status ? (
                  <i class="far fa-check-circle" style={{ fontSize: 26 }} />
                ) : (
                  "Undone"
                )}
              </button>
              <button
                style={Styles.statusButton}
                onClick={() => dispatch(removeTodoData(ele.id))}
              >
                <i class="fas fa-trash-alt" style={{ fontSize: 20 }} />
              </button> 
            </div>
          ))}
      </div>
    </>
      


  )
}

export default Todo