import React from 'react'
import List from '../components/List'

function Edit() {
    return (
        <section className="edit">
            <div className="edit__container">
                <div>
                    <input className="edit__container__input" type="text" placeholder="First color"/>
                    <button className="edit__container__button">Edit</button>
                </div>
                <div>
                    <input className="edit__container__input" type="text" placeholder="Second color"/>
                    <button className="edit__container__button">Edit</button>
                </div>
            </div>
            <List/>
        </section>
    )
}

export default Edit
