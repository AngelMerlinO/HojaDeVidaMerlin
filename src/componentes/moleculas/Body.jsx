import Card from "./Card";
import db from "../../DataBase/DataBase";
import '../../assets/Styles/cuerpo.css'
import iconEstudiante from "../../assets/Img/icons/StudentMale.png"
import iconImaginacion from '../../assets/Img/icons/Imaginacion.png'
function Body() {
    return (
        <>  
        <div className="cont-cuerpo">
        <div>
            <Card direcIcon={iconEstudiante} titulo={db.textIcon.estudiante} texto={db.texto.historiaAcademica}/>
            </div>
            <div>
            <Card direcIcon={iconImaginacion} titulo={db.textIcon.imaginacio} texto={db.texto.historiaAcademica}/>
            </div>

        </div>
        </> 

    );
}

export default Body ;