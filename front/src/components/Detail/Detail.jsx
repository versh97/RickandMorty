import {useCharacter} from '../../hooks/useCharacter';

const Detail = () => {
    const character = useCharacter();

    return (
        <div>
            {
                character.name ? (
                    <>
                    <h2>Name: {character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Specie: {character.specie}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <img src={character.image}/>
                    </>
                    ) : (
                        <h3>Cargando...</h3>
                    )}
        </div>
    )
}

export default Detail;