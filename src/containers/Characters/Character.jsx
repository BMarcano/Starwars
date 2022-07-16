import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import "../../assets/character.css"
import { useNavigate } from "react-router-dom";
const Character = (props) => {
    const [Characters, setCharacters] = useState([]);
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

    return (

        <div className="cards-container">
            {Characters.map((character, id) => (
                <>
                    <Card
                        id={id}
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