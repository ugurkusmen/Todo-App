import { createTodo, getData } from "./functions"
import { setFilters } from "./filters"
import { renderTodos } from "./views"





renderTodos()

document.querySelector('#input').addEventListener('input',(e)=> {
    setFilters({filter:e.target.value})
    renderTodos()
})


document.querySelector('#newTodos').addEventListener('submit',(e)=>{
    e.preventDefault()
    if(e.target.elements.todo.value.trim()!==''){
        createTodo(e.target.elements.todo.value.trim())
        renderTodos()
    }
    e.target.elements.todo.value=''
    
})


document.querySelector('#hidecomp').addEventListener('change',(e)=>{
    setFilters({hide:e.target.checked})
    renderTodos()
})

window.addEventListener('storage',(e)=>{
    if (e.key ==='todos') {
        getData()
        renderTodos()
        
    }
})