import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();
    const[character,setCharacter] = useState({});
    
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
       const API_KEY = "79b41760b9bd.bf40825cf5aa04a0b5ca";

        axios(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
        .then((response) => setCharacter(response.data))
    }, []);

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