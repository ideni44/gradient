const initialState = {
    items:[
        {
            id:1,
            first:'#bcbcc3',
            second:'#0000b8',
        },
        {
            id:2,
            first:'#ff0000',
            second:'#000000',
        },
        {
            id:3,
            first:'#fc466b',
            second:'#3f5efb',
        }
    ],
    selectedItem:[]
}

const gradients = (state = initialState,action) => {    
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                items:state.items.unshift(action.payload),
            }
        case 'EDIT_ITEM':
            return {
                ...state,
                items: action.position === 'first' ? state.items.map(i=>i.id == action.payload && i.first == action.color) : state.items.map(i=>i.id == action.payload && i.second == action.color),
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items:state.items.filter(item => item.id != action.payload),
            }
        case 'SET_ITEMS':
            return {
                ...state,
                items:[...action.payload],
            }
        case 'SET_EDIT_ITEM':
            return{
                ...state,
                selectedItem: state.selectedItem.pop() ? state.items.filter(i=>i.id===action.payload) : state.items.filter(i=>i.id===action.payload)
            }
        default:
            return state         
    }
}

export default gradients


