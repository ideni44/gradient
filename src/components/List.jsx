import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteItem } from '../redux/actions'


function List() {
    const dispatch = useDispatch()
    const items = useSelector(state=>state.items)

    const deleteGradient = (id) => {
        console.log(id)
        dispatch(deleteItem(id))
    }


    return (
        <section className="list">
            <div className="list__gradients">
                {
                    items.map(i=>{
                        const {id,first,second} = i
                        return (
                            <div className="list__gradients__item" key={id} style={{background:`linear-gradient(to right, ${first}, ${second})`}}>
                                <h1 className="list__gradients__item__title">{first}</h1>
                                <div className="list__gradients__item__group">
                                    <Link to={'/edit/' + id}>
                                        <button className="list__gradients__item__group__button" >Edit</button>
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