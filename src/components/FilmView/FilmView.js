import React, { useState, useEffect } from "react";

import { getDataFilm } from "../../utils/getData";
import { useParams } from "react-router-dom";

import Cast from "../Cast/Cast";

import "./FilmView.css";

const FilmView = () => {
	const { id } = useParams();
	const [film, setFilm] = useState({});

	useEffect(() => {
		const traerFilm = async () => {
			setFilm(await getDataFilm(id));
		};

		traerFilm();
	}, []);

	return (
		<>
			<div className="film-view">
				<div className="film_bg-img-container">
					<img
						src={`http://image.tmdb.org/t/p/original${film.backdrop_path}`}
						alt="backdrop"
						className="film_bg-img"
					/>
				</div>

				<div className="film-content">
					<div className="poster-wrapper">
						<div className="poster">
							<img
								src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
								alt="poster"
								className="poster_img"
							/>
						</div>
						<div className="poster-bottom"></div>
					</div>

					<div className="header-poster-wrapper">
						<section className="header-poster">
							<div className="title-content">
								<h1 className="title">{`${film.title}(2019)`}</h1>
								<h2 className="facts">{` - ${film.runtime} min -`}</h2>
							</div>
							<div className="chart-content">
								<h1 className="score">{`${film.vote_average * 10}%`}</h1>
								<h2 className="score-text">Users score</h2>
							</div>
							<div className="header_info">
								<h3 className="tagname">{film.tagline}</h3>
								<h1 className="info-title">General view</h1>
								<p className="overview">{film.overview}</p>
								<p className="film_genres-title">Genres</p>
								<p className="film_genres">
									{film.genres ? film.genres.map(genre => ` - ${genre.name}`) : null}
								</p>
							</div>
						</section>
					</div>
				</div>

				<Cast id={id} />
			</div>
		</>
	);
};

export default FilmView;
