import Card from "./Card";
import db from "../../DataBase/DataBase";
import '../../assets/Styles/cuerpo.css'

function Body() {
    return (
        <>  
        <div className="cont-cuerpo">
        <div>
            <Card direcIcon={db.infoIcons.iconEstudiante} titulo={db.textIcon.estudiante} texto={db.texto.historiaAcademica}/>
            </div>
            <div>
            <Card direcIcon={db.infoIcons.iconImaginacion} titulo={db.textIcon.imaginacio} texto={db.texto.historiaAcademica}/>
            </div>

        </div>
        </> 

    );
}

export default Body ;