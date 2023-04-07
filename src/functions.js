import uuidv4 from 'uuid'
let todos = []

const getData = function(){
    const todosJSON = localStorage.getItem('todos') 
    
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
       
}


const getTodos = ()=> todos

const saveData = ()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}

const removeTodo = (id)=>{
    const todoID = todos.findIndex((todo)=>todo.id === id )
    if(todoID >-1){
        todos.splice(todoID,1)
        saveData()
    }
    else{
        console.log('silinemedi')
    }
}


const toggleTodo = (id)=>{
    const hide = todos.find((todo)=>todo.id === id)
    if(hide){
    hide.completed = !hide.completed
    saveData()
    }
}


const createTodo = (text)=>{

    todos.push(
        {
        id:uuidv4(),
        text,
        completed:false
    })
        saveData()
        
}
getData()

export {getTodos,toggleTodo,removeTodo,createTodo,getData}