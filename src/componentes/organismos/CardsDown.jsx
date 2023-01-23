import CardDown from "../moleculas/CardDown";
import '../../assets/Styles/CardsDown.css'
import db from "../../DataBase/DataBase"
function CardsDown() {
    return (
        <div className="container1">
            <div className="card-down">
                <CardDown titulo={db.texDiv.primero} texto={db.infPersonal.aptitudes.map(aptitude=>(<p>●    {aptitude}</p>))}/>
            </div>
            <div className="card-down">
                <CardDown titulo={db.texDiv.segundo} texto={db.infPersonal.idiomas.map(idioma=>(<p>●    {idioma}</p>))}/>
            </div>
            <div className="card-down">
                <CardDown titulo={db.texDiv.tercero} texto={db.infPersonal.software.map(software=>(<p>●    {software}</p>))}/>
            </div>
        
        </div>
    );
}

export default CardsDown;