import React, { useReducer } from 'react';

const newToDo={
    title:'',
    id:'',
    desc:''
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'add':
        return{
            ...state,
            title:state.title,
            id:Math.round(Math.random*1000000000)
        }
    
        default:
           return state;
    }
}

function NewToDo()
{
    const [toDo,dispatch]=useReducer(reducer,newToDo);
   const toDoHandler=(e)=>{
       const value=e.target.value;
       if(e.target.name==='title')
       {
           dispatch({type:'add'});
       }
   }
const handleToDo=()=>{

}
return(
    <div>
        <textarea name="title" type="text" value="Enter Your title" onChange={toDoHandler}></textarea>
        <textarea name="desc" type="text" value="Enter Your Description" onChange={toDoHandler}></textarea>
        <button type="submit" onSubmit={handleToDo}>Submit</button>
    </div>
)
}

export default NewToDo;