const addItem = (item) => {
    return {
        type:'ADD_ITEM',
        payload:item
    }                    
}

const deleteItem = (id) => {
    return {
        type:'DELETE_ITEM',
        payload:id,
    }                    
}


const editItem = (position,color) => {
    // console.log(position,color)
    return {
        type:'EDIT_ITEM',
        position,
        color
    }                    
}


const setItems = (items) => {
    return {
        type:'SET_ITEMS',
        payload:items,
    }                    
}



const setEditItem = (id) => {
    console.log(id)
    return {
        type:'SET_EDIT_ITEM',
        payload:id,
    }                    
}


export {addItem,deleteItem,editItem,setItems,setEditItem}
