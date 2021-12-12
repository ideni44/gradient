import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteItem, setEditItem } from '../redux/actions'


function List({edit}) {

    const dispatch = useDispatch()
    const items = useSelector(state=>state.items)
    const selectedItem = useSelector(state=>state.selectedItem)


    const deleteGradient = (id) => {
        console.log(id)
        dispatch(deleteItem(id))
    }

    const setEditGradient = (id) => {
        console.log(id)
        dispatch(setEditItem(id))
    }

    const array = edit ? selectedItem : items
    return (
        <section className="list">
            <div className="list__gradients">
                {
                    array.map(i=>{
                        const {id,first,second} = i
                        console.log(i)
                        return (
                            <div className="list__gradients__item" key={id} style={{background:`linear-gradient(to right, ${first}, ${second})`}}>
                                <h1 className="list__gradients__item__title">{first}</h1>
                                <div className="list__gradients__item__group">
                                    <Link to={'/edit/' + id}>
                                        <button className="list__gradients__item__group__button" onClick={()=>setEditGradient(id)}>Edit</button>
                                    </Link>
                                    <button className="list__gradients__item__group__button" onClick={()=>deleteGradient(id)}>Delete</button>
                                </div>
                                <h1 className="list__gradients__item__title">{second}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default List


// Сделдать кнопки удобнее