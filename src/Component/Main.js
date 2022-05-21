import React from 'react';
import ShowToDo from './ShowToDo';
function ToDo()
{
const todos=[
    {
        id:1,
        title:"Why Software Engineering is so crucial for youngsters?",
        desc:"Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?"
    },
    {
        id:2,
        title:"Why Software Engineering is so crucial for youngsters?",
        desc:"Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?Why Software Engineering is so crucial for youngsters?"
    }
]
return(
    <div>
        <ShowToDo todos={todos}/>
    </div>
)
}

export default ToDo;