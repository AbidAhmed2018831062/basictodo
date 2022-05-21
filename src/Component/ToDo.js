import React, { useContext } from 'react';
import styles from '../assets/css/show.module.css';
import del from '../assets/images/delete.png';
import { delToDo } from './Main';
function ToDo({todo})
{
const {title,id,desc}=todo;
const {removeToDo}=useContext(delToDo);
//console.log(title+id+desc);
return(
    <section className={styles.sect} key={id}>
        <article>
            <h3>{title}</h3>
            <p>{desc}</p>
            <img src={del} alt="Delete Button" onClick={()=> removeToDo(id)}/>
        </article>
       
    </section>
)
}

export default ToDo;