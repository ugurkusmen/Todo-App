import { getFilters } from "./filters"
import { toggleTodo,removeTodo,getTodos } from "./functions"


const renderTodos = function(){
    const {filter,hide} = getFilters()
    let  rendered = getTodos().filter((todo)=>{
          const searchTextMatch = todo.text.toLowerCase().includes(filter.toLowerCase())
          const hideCompletedMatch = !hide || !todo.completed
          return searchTextMatch && hideCompletedMatch
          
      })

    const uncomp = rendered.filter((todo)=>!todo.completed)
    
    document.querySelector('div#todos').innerHTML = ' '
    document.querySelector('div#todos').appendChild(getSummary(uncomp))
    getSummary(rendered)
    
    if(rendered.length>0){
    rendered.forEach((rendered)=>{
        document.querySelector('div#todos').appendChild(createDom(rendered))
    })
    }else{
        const emtyMessage = document.createElement('p')
        emtyMessage.textContent = 'No ToDo to show'
        emtyMessage.classList.add('empty-message')
        document.querySelector('div#todos').appendChild(emtyMessage)
    }
   


}



//get summary
const getSummary = (uncomp) =>{
    const titel = document.createElement('h2')
    const plural = uncomp.length === 1 ? '': 's'
    titel.textContent = `You have ${uncomp.length} todo${plural} left `
    titel.classList.add('list-title')
    return titel
}


//create dom
const createDom = function(rendered){
        const newTodos = document.createElement('label')
        const containerEl = document.createElement('div')
        const todo = document.createElement('span')
        const checkbox = document.createElement('input')
        const button = document.createElement('button')


        //setting up checkbox
        checkbox.setAttribute('type','checkbox')
        checkbox.checked = rendered.completed
        containerEl.appendChild(checkbox)
        checkbox.addEventListener('change',()=>{
            toggleTodo(rendered.id)
            renderTodos()
        })

        

        //setting up new todo document
        todo.textContent = rendered.text
        containerEl.appendChild(todo)

        newTodos.classList.add('list-item')
        containerEl.classList.add('list-item__container')
        newTodos.appendChild(containerEl)

        // remove button
        button.textContent='remove'
        button.classList.add('button','button--text')
        newTodos.appendChild(button)
        button.addEventListener('click',()=>{
            removeTodo(rendered.id)
            renderTodos()
        })


        
        return newTodos
}




export {renderTodos}