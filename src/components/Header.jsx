import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <Link to='/' style={{ textDecoration: 'none', color: 'black'}}>
                <h1 className="header__title">
                    Gradient helper
                </h1>
            </Link>
        </header>
    )
}

export default Header
