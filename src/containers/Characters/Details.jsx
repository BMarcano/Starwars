import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/details.css'
import CardDetails from "../../components/CardDetails";

const Details = (props) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [films, setFilms] = useState([]);
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);

    useEffect(() => {
        const getCharacter = async () => {

            try {
                const data = await axios.get(`https://swapi.dev/api/people/1`);
                console.log(data)
                setName(data.data.name);
                setGender(data.data.gender);
                setBirthday(data.data.birth_year);
                setFilms(data.data.films);
                setHeight(data.data.height);
                setMass(data.data.mass);
            } catch (error) {
                console.log(error)
            }
        };
        getCharacter();

    }, []);
    return (
        <div className="container-details">
            <CardDetails 
            name = {name}
            gender = {gender}
            birthdate = {birthday}
            films= {films}
            height = {height}
            mass = {mass}
            />
        </div>
    )
}

export default Details