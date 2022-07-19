import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Cards/Card";
import "../../assets/character.css"
import { useNavigate } from "react-router-dom";
import Details from "./Details";
const Character = (props) => {
    const [Characters, setCharacters] = useState([]);
    const Favorites = []
    let navigate = useNavigate();

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const data = await axios.get('https://swapi.dev/api/people/');
                setCharacters(data.data.results);
            } catch (error) {
                console.log(error)
            }
        };
        getCharacter();

    }, []);

    const handleDetail = (id) => {
        navigate(`/Details`, { id });
    };
    const handleFavorite = () =>{
        Favorites.push(Characters.data)
    }
    console.log(Favorites)
    return (

        <div className="cards-container">
            {Characters.map((character, id) => (
                <>
                    <Card
                        handleFavorite = {handleFavorite}
                        id = {id}
                        name={character.name}
                        gender={character.gender}
                        birthday={character.birth_year}
                        handleDetail={handleDetail}
                    />

                </>
            ))}
        </div>
    )
}
export default Character;