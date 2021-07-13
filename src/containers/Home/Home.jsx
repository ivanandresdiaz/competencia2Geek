import React, { useState, useEffect } from 'react'
import CardHeroes from '../../components/CardHeroes';

const Home = () => {

    const [character, setCharacter] = useState([]);


    const getCharacters = async () => {
        const url = "http://localhost:3000/heroes";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data)

        const characters = data.map((char) => {
            return {
                id: char.id,
                name: char.name,
                superhero: char.superhero,
                publisher: char.publisher,
                alter_ego: char.alter_ego,
                first_appearance: char.first_appearance,
                image: char.image
            }

        });
        return characters

    }


    useEffect(() => {
        getCharacters()
            .then((resp) => {
                setCharacter(resp)
            })
    }, [])

    return (
        <>
            <h1>Súper Heroes</h1>
            <hr></hr>
            <CardHeroes character={character}/>

        </>
    )
}

export default Home
