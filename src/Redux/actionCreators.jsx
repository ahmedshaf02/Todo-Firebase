

import {
  ADD_ITEM_SUCCESS,ADD_ITEM_FAILURE,ADD_ITEM_REQUEST,
  GET_ITEM_SUCCESS,GET_ITEM_FAILURE,GET_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,REMOVE_ITEM_FAILURE,REMOVE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,UPDATE_ITEM_FAILURE,UPDATE_ITEM_REQUEST,

}  from "./actionTypes"

import {todo} from "../firebaseConfig"



  
export const addItemRequest = payload=>({
  type: ADD_ITEM_REQUEST,
  payload:payload
})
export const addItemFailure = (payload,callback)=>({
  type: ADD_ITEM_FAILURE,
  payload:payload,
})
export const addItemSuccess = payload=>({
  type: ADD_ITEM_SUCCESS,
  payload:payload
})
  

export const getItemRequest = payload=>({
  type: GET_ITEM_REQUEST,
  payload:payload
})
export const getItemFailure = (payload,callback)=>({
  type: GET_ITEM_FAILURE,
  payload:payload,
})
export const getItemSuccess = payload=>({
  type: GET_ITEM_SUCCESS,
  payload:payload
})


export const removeItemRequest = payload=>({
  type: REMOVE_ITEM_REQUEST,
  payload:payload
})
export const removeItemFailure = (payload,callback)=>({
  type: REMOVE_ITEM_FAILURE,
  payload:payload,
})
export const removeItemSuccess = payload=>({
  type: REMOVE_ITEM_SUCCESS,
  payload:payload
})


export const updateItemRequest = payload=>({
  type: UPDATE_ITEM_REQUEST,
  payload:payload
})
export const updateItemFailure = (payload,callback)=>({
  type: UPDATE_ITEM_FAILURE,
  payload:payload,
})
export const updateItemSuccess = payload=>({
  type: UPDATE_ITEM_SUCCESS,
  payload:payload
})

// ADD TODO
export const addTodoData = (payload)=>dispatch=>{
  dispatch(addItemRequest())
return todo.add({
          name:payload,
          status:false
      }).then(()=>{
        console.log("successfully added")
        dispatch(addItemSuccess())
      })
      .catch((erorr)=>{
        console.log(erorr)
        dispatch(addItemFailure())
      })

}
// GET TODO

export const getTodoData = (payload)=>dispatch=>{
  console.log("request")
  dispatch(getItemRequest())
return todo.get().then((query)=>{
      let ar = []
        query.forEach(doc=>(
          ar.push({id:doc.id,...doc.data()})
        ))
        console.log("successfully get")
        // console.log(ar)
        dispatch(getItemSuccess(ar))
      })
      .catch((erorr)=>{
        console.log(erorr)
        dispatch(getItemFailure())
      })

}

// REMOVE TODO
export const removeTodoData = (payload)=>dispatch=>{
  console.log("request")
  dispatch(getItemRequest())
return todo.doc(payload).delete().then(()=>{
  dispatch(removeItemSuccess(payload))
  console.log("remove todo")
}).catch(error=>console.log(error))
}

// update todo
export const updateTodoData = (payload)=>dispatch=>{
  console.log("request")
  dispatch(updateItemRequest())
return todo.doc(payload).update({
    status:true
}).then(()=>{
  dispatch(updateItemSuccess(payload))
  console.log("update todo")
}).catch(error=>console.log(error))
}

