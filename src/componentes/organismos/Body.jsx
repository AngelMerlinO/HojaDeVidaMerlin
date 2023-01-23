import Card from "../moleculas/Card";
import db from "../../DataBase/DataBase";
import '../../assets/Styles/cuerpo.css'
import iconEstudiante from "../../assets/Img/icons/StudentMale.png"
import iconImaginacion from '../../assets/Img/icons/Imaginacion.png'
function Body() {
    return (
        <>  
        <div className="cont-cuerpo">
            <div className="carta">
                <Card direcIcon={iconImaginacion} titulo={db.textIcon.imaginacio} texto={db.texto.perfil}/>
            </div>

            <div className="carta">
                <Card direcIcon={iconEstudiante} titulo={db.textIcon.estudiante} texto={db.texto.historiaAcademica}/>
            </div>
        
        </div>
        </> 

    );
}

export default Body ;