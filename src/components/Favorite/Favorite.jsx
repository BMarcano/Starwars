import React from 'react'
import '../../assets/Favorite.css'
const FilterFavorite = (props) => {
    return (
        <div className='container-button'>
            <button className="btn" onClick={() => props.ShowFavorites()}>Filtrar por favoritos</button>
        </div>
    )
}

export default FilterFavorite