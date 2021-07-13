import React from 'react'

const CardHeroes = ({ character }) => {
    return (
        <div>
            {console.log("Pintando tarjetas")}
            {
                character.map(char => (
                    <div className="" key={char.id}>
                        <img src={char.image} className="" alt={char.name}></img>
                        <h1 className="">{char.superhero}</h1>
                        <h1 className="">{char.alter_ego}</h1>
                        <h1 className="">{char.publisher}</h1>
                        <button>Ver detalle</button>
                    </div>
                ))
            }
        </div>
    )
}

export default CardHeroes