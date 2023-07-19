import Api from './Api'
import './botones.css'



function Botones() {
    const selecMovie = async (movie) => {
        axiosMovie(movie.id)
        setMovie(movie)
        window.scrollTo(0, 0)
        
        
    }
    return (
        <div>
            < div >
                <input type="Text" className="search" placeholder='buscar por nombre'
                />
              

            {/*<select className="selecYears">
                <option> Por Año </option>  
            </select>
           
            <select className="selecPopularity">
                <option> Popularidad</option>
            </select>*/}
                <hr></hr>
            </div>
        </div>

       
    )
}


export default Botones;