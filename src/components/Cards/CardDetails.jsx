import React from "react";
import "../../assets/cardDetails.css"
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";
const CardDetails = (props) => {
    const gender = props.gender.charAt(0).toUpperCase() + props.gender.slice(1);
    const navigate = useNavigate();
    return (
        
        <div className="containerCard">

            <button className="goBack" onClick={() => navigate(-1)}> Volver al listado </button>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div className="card-body-details">
                <p>{gender} </p>
                <p>Birth date: {props.birthdate}</p>
                {<p>Amount of films: {props.films}</p>}
                <p>Height: {props.height} | Mass: {props.mass}</p>
            </div>
        </div>
    )
}

export default CardDetails
