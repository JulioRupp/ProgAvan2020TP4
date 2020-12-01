const apiKey = "8ed083af465ff4938a2b7222511a9336";

const getFilms = async (pag) => { //Notar, hacemos una PROMESA porque esta api se consume de manera ASincrona, cosa que no nos sirve. Usamos un Async/away para ejecutarlo de manera sincrona.
    const page = pag ? pag : 1; //Usualmente, todas las apis medianas púbicas son asincronas.
    const url =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
    try{
        const response = await fetch(url) //Acá marcamos que se comportará de manera sincrona estas dos constantes, y al final devolverán el json para que podamos mostrar la info
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + err);
    }
}

const getDataFilm = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + err);
    }
}

const getCast = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + err);
    }
}


export {getFilms, getDataFilm, getCast};
