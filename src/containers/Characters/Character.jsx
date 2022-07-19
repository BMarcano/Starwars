import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Cards/Card";
import "../../assets/character.css"
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
const Character = () => {
    const [characters, setCharacters] = useState([]);
    const favorites = [3, 4, 9]
    const [showFavorites, setShowFavorites] = useState(false)
    const [star, setStar] = useState(false);

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
        navigate(`/Details`, { state: { id } });
    };
    const handleFavorite = (id) => {
        if ((star == true)) {
            favorites.push(id)
        } else {
            return false
        }
    }
    const toggleStar = () => {
        setStar(!star)
        handleFavorite();
    }
    const toggleFavorites = () => {
        setShowFavorites(!showFavorites)
    }
    const shouldShow = (id) => {
        if ((showFavorites && favorites.includes(id)) || !showFavorites) {
            return true
        } else {
            return false
        }
    }
    console.log(favorites)
    return (
        <>
            <div >
                <Menu
                    ShowFavorites={toggleFavorites}
                />
            </div>
            <div className="cards-container">

                {characters.map((character, id) => (
                    <>

                        {shouldShow(id) &&
                            <Card
                                showStar={toggleStar}
                                id={id}
                                name={character.name}
                                gender={character.gender}
                                birthday={character.birth_year}
                                handleDetail={handleDetail}
                            />
                        }
                    </>
                ))}
            </div>
        </>
    )
}
export default Character;