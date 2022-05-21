import React, { useReducer } from 'react';
import styles from '../assets/css/todo.module.css';
let id=1;
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
            title:action.title,
            desc:action.desc,
            id:Math.round(Math.random()*10000000+50)
        }
    
        default:
           return state;
    }
}

function NewToDo({addToDo})
{
    const [toDo,dispatch]=useReducer(reducer,newToDo);
   const toDoHandler=(e)=>{
       id++;
       const value=e.target.value;
       if(e.target.name==='title')
       {
           dispatch({type:'add',title:value,desc:toDo.desc,id});
       }
       else
       {
        dispatch({type:'add',desc:value,title:toDo.title,id});
       }
   }
return(
    <div className={styles.styleText}>
        <div className={styles.sty}>
        <label htmlFor="title">Title:</label>
        <textarea name="title" type="text" value={toDo.title} onChange={toDoHandler}></textarea>
        </div>
        <div className={styles.sty}>
        <label htmlFor="desc">Description: </label>
        <textarea name="desc" type="text" value={toDo.desc} onChange={toDoHandler}></textarea>
        </div>
        <button type="submit" onClick={()=> addToDo(toDo)}>Submit</button>
    </div>
)
}

export default NewToDo;