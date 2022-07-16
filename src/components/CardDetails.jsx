import React from "react";
import "../assets/cardDetails.css"

const CardDetails = (props) => {
    const gender = props.gender.charAt(0).toUpperCase() + props.gender.slice(1);

    return (
        <div className="container">
            <div>
                <h1>{props.name}</h1>
            </div>
            <div className="card-body">
                <p>{gender} </p>
                <p>Birth date: {props.birthdate}</p>
                {/* <p>Amount of films: {props.films}</p> */}
                <p>Height: {props.height} | Mass: {props.mass}</p>
            </div>
        </div>
    )
}

export default CardDetails
