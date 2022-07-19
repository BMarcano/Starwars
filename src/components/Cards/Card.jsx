import React from "react";
import "../../assets/card.css"

const Card = (props) => {
    const Name = props.name.charAt(0).toUpperCase() + props.name.slice(1);

    return (
        <>
        <button onClick={props.handleFavorite()}>Favorito</button>

        <div className="container" onClick={()=>props.handleDetail(props.id)}>
            <div>
                <h1>{Name}</h1>
            </div>
            <div className="card-body">
                <p>{Name} |</p>
                <p>Birthday: {props.birthday}</p>
            </div>
        
        </div>
        </>
    )
}

export default Card
