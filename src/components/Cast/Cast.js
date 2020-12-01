import React, {useState, useEffect} from "react";

import ActorCard from "../ActorCard/ActorCard";

import{getCast} from '../../utils/getData'

import "./Cast.css";

const Cast = ({id}) => {

	const [cast, setCast] = useState([]);

	useEffect(() => {
		const traerCast = async () => {
            const res = await getCast(id)
            setCast(res.cast);
            //console.log(res.cast)
        };
        
        traerCast();
        
	}, [id]);

	return (
		<section className="cast">
			<h2 className="cast_title">Main Actors</h2>
			<div className="cast_actors">
                {cast.map(actor => <ActorCard key={actor.id} actorData={actor}/>)}
			</div>
		</section>
	);
};

export default Cast;
