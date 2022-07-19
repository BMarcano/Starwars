import React from 'react'
import "../../assets/menu.css"
const Menu = (props) => {
    return (
        <div className='navbar'>
            <header>Star wars Characters</header>
            <button className="btn" onClick={() => props.ShowFavorites()}>Filtrar por favoritos</button>

        </div>
    )
}

export default Menu