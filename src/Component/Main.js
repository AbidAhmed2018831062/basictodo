import React, { useState } from 'react';
import NewToDo from './NewToDo';
import ShowToDo from './ShowToDo';
const delToDo=React.createContext();
function ToDo()
{
   
    
const [todos,setToDos]=useState([]);
const addToDo=(todo)=>{
    setToDos((prev)=>{ //console.log([...prev,{todo}]);
        return [...prev,todo]});
console.log(todos);
}
const removeToDo=(id)=>{
    setToDos(prev=> {
       const preToDo=prev.filter((todo)=> todo.id !== id);
       return preToDo;
    })
}
return(
    <div>

           <NewToDo addToDo={addToDo}/>
      <hr></hr>
      <delToDo.Provider value={removeToDo}>
        <ShowToDo todos={todos}/>
        </delToDo.Provider>
    </div>
)
}
export { delToDo };

export default ToDo;