import Card from '../Card/Card';
import React from "react";
import { CardsContainer } from './styleComponents';


export default function Cards(props) {
   const { characters } = props;
   const onClose = (id) => props.onClose(id);
   return (
      <CardsContainer  >
        {characters.map((character) => {
          return (
           <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => onClose(character.id)}
          />
          );
       })}
      </CardsContainer >
    );
}
