import React from "react";
import "../../assets/card.css"

const Card = (props) => {
    const Name = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    const gender = props.gender.charAt(0).toUpperCase() + props.gender.slice(1);

    return (
        <>        
        <div className="container" onClick={()=>props.handleDetail(props.id+1)}>
            <div>
                <h1>{Name}</h1>
            </div>
            <div className="card-body">
                <p>{gender} |</p>
                <p>Birth date: {props.birthday}</p>
            </div>
        
        </div>
        </>
    )
}

export default Card
