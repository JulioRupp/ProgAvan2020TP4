import React from 'react';

import {Link} from 'react-router-dom';

import './FilmCard.css';

const FilmCard = ({film}) => {
    
    const {id, poster_path, title, release_date} = film;
    const srcImg = "https://image.tmdb.org/t/p/original" + poster_path;

    return (
        <div className="film-card">
            <Link to={`/${id}`}>
                <img src={srcImg} alt="" className="film_img"/>
                <div className="film_texts">
                    <h1 className="film_title">{title}</h1>
                    <h2 className="film_release-date">{release_date}</h2>
                </div>
            </Link>
        </div>
    );
};

export default FilmCard;