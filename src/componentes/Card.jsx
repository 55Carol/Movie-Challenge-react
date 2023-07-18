import "./card.css";

// eslint-disable-next-line react/prop-types
function Card({ movie }) {
    // traer enpoints y asignara en constante para utilizar: imagenes,
    //utilizar hooks con los estados (manejar usestate y useEffect(para renderizar))
    //crear funcion para hacer peticion get del api.
    return (
        
        <div
            className="Card">
            <h3 className="title"> {movie.title} </h3>
            <img src={"https://image.tmdb.org/t/p/w185/" + movie.poster_path} className="img" />
        </div>
        
    );
}

export default Card;
