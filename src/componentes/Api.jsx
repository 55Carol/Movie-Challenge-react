import { useEffect , useState } from 'react'; 
import axios from 'axios';
import Card from './Card';
//componente principal
function Api() {
    const apiKey = '12242c790252f2baf9162ae60d47d85c';
    const api = 'https://api.tmdb.org/3';

    const [movies, setMovie] = useState(null);
console.log(movies)
    const getMovie = async()=> {
        const response = await axios.get(`${api}/discover/movie`, {
            params: {
                api_key: apiKey,
                page:1,
            }
        })

        setMovie(response.data);
    }

    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className='contenedorTarjetas'>
            {movies ? (
                movies.results.map((movie) => (
                    <Card key={movie.id} movie={movie}/>
                    
                ))
            ) : null}
        </div>
    )
}

export default Api;