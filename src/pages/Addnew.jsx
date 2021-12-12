import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import List from '../components/List'
import { addItem } from '../redux/actions'



function Addnew() {

    const dispatch = useDispatch()
    const [selectedGradient, setSelectedGradient] = useState({'first':null,'second':null})
    const [buttonAllow,setButtonAllow] = useState(true)


    const editGradient = () =>{
        if(!/[^0-9a-f]+/i.test(selectedGradient['first' && 'second']) && (selectedGradient['first' && 'second'].length <= 6 && selectedGradient['first' && 'second'].length >= 3 && selectedGradient['first' && 'second'].length !==4)){
            if(selectedGradient.first && selectedGradient.second){
                dispatch(addItem(selectedGradient))
            }
        }
    }


    const changeInput = (e,position) => {
        let value = e.target.value
        position === 'first' ? setSelectedGradient({...selectedGradient,first:value}) : setSelectedGradient({...selectedGradient,second:value})
        setButtonAllow(false)
    }

    return (
        <section className="add">
            <div className="add__container">
                 <input 
                    className="add__container__input" 
                    type="text" 
                    placeholder="First color"  
                    onChange={(e)=>changeInput(e,'first')}/>
                <input 
                    className="add__container__input" 
                    type="text"
                    placeholder="First color"  
                    onChange={(e)=>changeInput(e,'second')}/>
                <button 
                    className="add__container__button"
                    onClick={()=>editGradient()} 
                    disabled={buttonAllow} 
                    style={buttonAllow ?{cursor: 'not-allowed'}:{cursor:'pointer'}}>Add new</button>
            </div>
           <List/>
        </section>
    )
}

export default Addnew
