const initialState = {
    items:[
        {
            id:Date.now()+8,
            first:'#bcbcc3',
            second:'#0000b8',
        },
        {
            id:Date.now()+2,
            first:'#ff0000',
            second:'#000000',
        },
        {
            id:Date.now()+3,
            first:'#fc466b',
            second:'#3f5efb',
        }
    ],
    selectedItem:[]
}

const gradients = (state = initialState,action) => {    
    switch(action.type){
        case 'ADD_ITEM':
            const newItem = {
                id:Date.now(),
                'first':'#' + action.payload.first,
                'second':'#' + action.payload.second
            }
            return {
                ...state,
                items:[newItem,...state.items]
            }
        case 'EDIT_ITEM':
            const arr = [...state.selectedItem]
            arr.forEach(i=>{
                i[action.position]='#' + action.color
            })
            return {
                ...state,
                selectedItem:arr
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
            state.selectedItem.splice(0, 1)
            return {
                ...state,
                selectedItem: state.items.filter(item =>item.id == action.payload),
            }
        default:
            return state         
    }
}

export default gradients


