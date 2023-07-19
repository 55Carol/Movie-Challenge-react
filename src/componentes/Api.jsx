import { useEffect , useState } from 'react'; 
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';


//componente principal
function Api() {
    const apiKey = '12242c790252f2baf9162ae60d47d85c';
    const api = 'https://api.tmdb.org/3';

    const [movies, setMovie] = useState(null);

    const getMovie = async()=> {
        const response = await axios.get(`${api}/movie/now_playing`, {
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
        <div className='contenedor'>
            {movies ? (
                movies.results.map((movie) => (
                    <Link key={movie.id} to={`detail/${movie.id}`}>
                        <Card key={movie.id} movie={movie}></Card>
                        </Link> 
                ))
            ) : null}
        </div>

    )
}

export default Api;