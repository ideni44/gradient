import React from 'react'
import List from '../components/List'



function Addnew() {
    return (
        <section className="add">
            <div className="add__container">
                <div>
                    <input className="add__container__input" type="text" placeholder="First color"/>
                    <button className="add__container__button">Edit</button>
                </div>
                <div>
                    <input className="add__container__input" type="text" placeholder="Second color"/>
                    <button className="add__container__button">Edit</button>
                </div>
            </div>
           <List/>
        </section>
    )
}

export default Addnew
