import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail() {
    const apiKey = '12242c790252f2baf9162ae60d47d85c';
    const api = 'https://api.tmdb.org/3/movie/';
    let { detailId } = useParams()
    const [movies, setMovie] = useState([]);
    const getMovie = async () => {
        const response = await axios.get(`${api}${detailId}`, {
            params: {
                api_key: apiKey,
                page: 1,
            }
        })

        setMovie(response.data);
        console.log(response)
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (<div className="Movies">
        <h1>Detalle de Películas</h1>
        {movies && (
            <div>
                <h2>{movies.title}</h2>
                {movies.poster_path && (
                    <img src={'https://image.tmdb.org/t/p/w185/' + movies.poster_path} />
                )}
                <p>Fecha de lanzamiento: {movies.release_date}</p>
                <p>Calificación promedio: {movies.vote_average}</p>
                <p>Titulo Original:{movies.original_title}</p>
                <p>Descripción General: {movies.overview}</p>         
               
   </div>
        )}

        
            </div>
        ) 
}
    



export default Detail;
