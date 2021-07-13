import React from 'react'
import { ContainerCard, Card, ContainerImg, Img } from '../styles/Cards/CardsStyles'

const CardHeroes = ({ character }) => {
    return (
        <ContainerCard>
            {console.log("Pintando tarjetas")}
            {
                character.map(char => (
                    <>
                        <Card className="" key={char.id}>
                          
                                <Img src={char.image} className="" alt={char.name}></Img>
                           
                            <h1 className="">{char.superhero}</h1>
                            <h1 className="">{char.alter_ego}</h1>
                            <h1 className="">{char.publisher}</h1>
                            <button>Ver detalle</button>
                        </Card>
                    </>
                ))
            }
        </ContainerCard>
    )
}

export default CardHeroes