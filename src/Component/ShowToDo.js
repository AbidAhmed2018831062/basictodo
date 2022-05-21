import ToDo from "./ToDo";
function ShowToDo({todos})
{

return(
    
    <div>
    {
        todos.map((element)=>{
            return <ToDo key={element.id} todo={element}/>
        
    })
}
</div>
)
}

export default ShowToDo;