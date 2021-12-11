import React, { useState } from 'react'
import List from '../components/List'
import { useDispatch, useSelector } from 'react-redux'
import { editItem } from '../redux/actions'


function Edit() {
    const dispatch = useDispatch()
    const items = useSelector(state=>state.items)
    const [selectedGradient, setSelectedGradient] = useState({'first':null,'second':null})
    const [buttonAllow,setButtonAllow] = useState({'first':false,'second':false})


    const editGradient = (position) =>{
        console.log(selectedGradient[position].length)
        if(!/[^0-9a-f]+/i.test(selectedGradient[position]) && (selectedGradient[position].length <= 6 && selectedGradient[position].length >= 3)){
           dispatch(editItem(position,selectedGradient[position]))
        }
    }


    const changeInput = (e,position) => {
        let value = e.target.value
        position ==='first' ? setSelectedGradient({...selectedGradient,first:value}) : setSelectedGradient({...selectedGradient,second:value})
        value.length != 0 ? setButtonAllow({...buttonAllow, [position]: true}) : setButtonAllow({...buttonAllow,[position]: false})
    }

    return (
        <section className="edit">
            <div className="edit__container">
                <div>
                    <input 
                        className="edit__container__input" 
                        type="text" 
                        placeholder="First color" 
                        onChange={(e)=>changeInput(e,'first')}/>
                    <button 
                        className="edit__container__button" 
                        onClick={()=>editGradient('first')} 
                        disabled={!buttonAllow['first']} 
                        style={!buttonAllow['first']?{cursor: 'not-allowed'}:{cursor:'pointer'}}>Edit</button>
                </div>
                <div>
                    <input 
                        className="edit__container__input" 
                        type="text" 
                        placeholder="Second color"
                        onChange={(e)=>changeInput(e,'second')}/>
                    <button 
                        className="edit__container__button" 
                        disabled={!buttonAllow['second']} 
                        onClick={()=>editGradient('second')} 
                        style={!buttonAllow['second']?{cursor: 'not-allowed'}:{cursor:'pointer'}}>Edit</button>
                </div>
            </div>
            <List edit={true}/>
        </section>
    )
}

export default Edit
