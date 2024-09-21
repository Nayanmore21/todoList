// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// const apidata = 'http://127.0.0.1:3000/todos'

// const App = () => {
//   const  [title , setTitle]=useState([]);
//   const  [desc , setDesc]=useState([]);
//   useEffect(()=>{
//     async function getTodoData(){
//       const response = await axios.get(`${apidata}/4`);
//       setTitle(response.data.title);
//       setDesc(response.data.desc);
//     }
//     getTodoData();
//   },[]);
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{desc}</p>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Form from './components/Form'
import TodoDisplay from './components/todoDisplay'


const App = () => {
  return (
    <div>
      <Form />
      <TodoDisplay />
      
    </div>
  )
}

export default App
