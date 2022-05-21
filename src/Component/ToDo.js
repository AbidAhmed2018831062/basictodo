import React from 'react';

function ToDo({todo})
{
const {title,id,desc}=todo;
return(
    <section>
        <article>
            <h3>{title}</h3>
            <p>{desc}</p>
        </article>
    </section>
)
}

export default ToDo;