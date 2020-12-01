import React, {useState, useEffect} from 'react';

import FilmCard from '../FilmCard/FilmCard.js'

import {getFilms} from '../../utils/getData.js';
import randomPage from '../../utils/randomGen.js'

import './Home.css';


const Home = () => {

    const [films, setFilms] = useState([])

    useEffect( () => { //Use effect es onda un hook, pero más potente. Es para poder decidir cuando queremos que se ejecute un código concreto.

            async function fetchMovies() {
                const APIresponse = await getFilms(randomPage()); //En este caso, cuando lleguen las películas a pantalla
                setFilms(APIresponse.results)
            }

            fetchMovies();

        }, [])

    return (
        <section className="films-container">
            <div className="films">
                {films.map(film => ( //Mapeado de las tarjetas
                        <FilmCard
                            key={film.id}
                            film={film}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Home;
