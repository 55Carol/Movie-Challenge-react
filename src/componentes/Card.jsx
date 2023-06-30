import "./card.css";

// eslint-disable-next-line react/prop-types
function Card({ title = "titulo", descripcion = "descripcion" }) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            <p>{descripcion} </p>
        </div>
    );
}

export default Card;
