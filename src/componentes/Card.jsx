import "./card.css";

// eslint-disable-next-line react/prop-types
function Card({ movie }) {
    // traer enpoints y asignara en constante para utilizar: imagenes,
    //utilizar hooks con los estados (manejar usestate y useEffect(para renderizar))
    //crear funcion para hacer peticion get del api.
    return (
        
        <div
            className="Card">
            <h2>{movie.title}</h2>
            <img src={"https://image.tmdb.org/t/p/w185/" + movie.poster_path} />
        </div>
        
    );
}

export default Card;
