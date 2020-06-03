

import {
  ADD_ITEM_FAILURE,ADD_ITEM_REQUEST,ADD_ITEM_SUCCESS,
  GET_ITEM_FAILURE,GET_ITEM_REQUEST,GET_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,REMOVE_ITEM_REQUEST,REMOVE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,UPDATE_ITEM_REQUEST,UPDATE_ITEM_SUCCESS,
  
}  from "./actionTypes"

export const initState = {  
  todo:[]
}

export default (state=initState, {type,payload})=>{

  switch(type){
      case ADD_ITEM_FAILURE:
        return{
          ...state,
        isLoading:true,
        isError:false,
        isLogin:false
      }
      case ADD_ITEM_REQUEST:
        return{
          ...state,
          isLoading:false,
          loginData:payload,
          isLogin:true

        }
        
      case ADD_ITEM_SUCCESS:
        console.log(payload)
        return{
          ...state,
          isLoading:false,
          isError: true,
          loginData:payload,
          isLogin:false
    }
      case GET_ITEM_FAILURE:
        return{
          ...state,
        isLoading:true,
        isError:false,
        isLogin:false
      }
      case GET_ITEM_REQUEST:
        return{
          ...state,
          isLoading:false,
          loginData:payload,
          isLogin:true

        }
        
      case GET_ITEM_SUCCESS:
        console.log(payload)
        return{
          ...state,
          todo:[...payload]
    }

    case REMOVE_ITEM_FAILURE:
      return{
        ...state,
      isLoading:true,
      isError:false,
      isLogin:false
    }
    case REMOVE_ITEM_REQUEST:
      return{
        ...state,
        isLoading:false,
        loginData:payload,
        isLogin:true

      }
      
    case REMOVE_ITEM_SUCCESS:
      console.log(payload)
      return{
        ...state,
        todo:state.todo.filter(ele=>ele.id!==payload)
  }

  case UPDATE_ITEM_FAILURE:
    return{
      ...state,
    isLoading:true,
    isError:false,
    isLogin:false
  }
  case UPDATE_ITEM_REQUEST:
    return{
      ...state,
      isLoading:false,
      loginData:payload,
      isLogin:true

    }
    
  case UPDATE_ITEM_SUCCESS:
    console.log(payload)
    return{
      ...state,
      todo:state.todo.map(ele=>ele.id===payload?{...ele,status:true}:ele)
}

    default:
      return state
  }

}