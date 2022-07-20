import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Cards/Card";
import "../../assets/character.css"
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import FilterFavorite from "../../components/Favorite/Favorite";
const Character = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, setFavorites] = useState([])
    const [showFavorites, setShowFavorites] = useState(false)
    const [star, setStar] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const data = await axios.get('https://swapi.dev/api/people/');
                setCharacters(data.data.results);
            } catch (error) {
                return error
            }
        };
        getCharacter();

    }, []);

    const handleDetail = (id) => {
        navigate(`/Details`, { state: { id } });
    };
    const handleFavorite = (id) => {
        if (star == true || !star) {
            setFavorites([...favorites, id])   
        } else {
            return false
        }  

    }

    const toggleStar = (id) => {
        setStar(star)
        handleFavorite(id);
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

    return (
        <><div className="container-button-character">
            <div >
                <Menu />
                <FilterFavorite
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
        </div>
        </>
    )
}
export default Character;