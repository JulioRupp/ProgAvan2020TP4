import React from 'react';

import './ActorCard.css'

const ActorCard = ({actorData}) => {

    const {name, character, profile_path} = actorData;

    const urlImg = profile_path ? `http://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/
    glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg` //Desde acá ejecutamos la parte de la api en donde sacamos las img de los actores.

    return (
        <article className="actor-card">
            <img src={urlImg} alt="profile_path" className="actor_img" /> //Acá los ponemos en tarjetas
            <div className="actor-card_texts">
                <h1 className="actor_name">{name}</h1> 
                <h2 className="actor_character">{character}</h2>
            </div>
        </article>
    );
}

//Esto es mucho más comodo si lo haces con Bootstrap, millones de veces más comodo.

export default ActorCard; //Para proyectos chicos siempre hay que exportarlo por default
