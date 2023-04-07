const filters = {
    filter: '',
    hide : false
}

const getFilters = ()=> filters
const setFilters = ({filter,hide})=>{
    if(typeof filter === 'string'){
        filters.filter = filter
    }
    if(typeof hide === 'boolean'){
        filters.hide= hide
    }
    
}



export {getFilters,setFilters}