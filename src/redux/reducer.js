import { act } from "react-dom/cjs/react-dom-test-utils.production.min"

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
            let arr = [...state.selectedItem]
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
                selectedItem: state.items.filter(item=>item.id == action.payload)
            }
        default:
            return state         
    }
}

export default gradients


