import React from 'react'

const NavBar = ({brand}) => {
    return (
        // Header 
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">{brand}</a>
            </div>
        </nav>
    )
}

export {NavBar};