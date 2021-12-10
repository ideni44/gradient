import React from 'react'
import { Link } from 'react-router-dom'


function Addbuttons() {
    return (
        <section className="group">
            <div className="group__buttons">
                <h1 className="group__buttons__edit">To edit press on item</h1>
                <Link to='/new'>
                    <button className="group__buttons__add">Add New</button>
                </Link>
            </div>
        </section>
    )
}

export default Addbuttons
