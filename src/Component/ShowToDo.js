import ToDo from "./ToDo";
function ShowToDo({todos})
{
    //console.log("I was rendered")

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