import React, { useEffect, useState } from "react";
import "./styles.css";
import {user} from "./firebaseConfig"
import Todo from "./Todo"

export default function App() {

// const [data,setData] = useState([])

// useEffect(()=>{

// user.doc("1Ern32Lrakhkm12hNbMZ").update({
//   name:"name"
// }).then((query)=>{
//   // let ar = []
//   // query.forEach(doc=>{
//   //   // console.log(doc.id, doc.data())
//   //   ar.push({id:doc.id,...doc.data()})
//   // })
//   // setData([...ar])
// }
// ).then(()=>console.log("deleted"))
// .catch(error=>console.log(error))

// },[])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
          <Todo/>
    </div>
  );
}
