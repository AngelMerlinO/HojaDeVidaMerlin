import Icon from "../atoms/icon";
import TextIcon from "../atoms/textIcon";
import '../../assets/Styles/icon.css'

function IconoInformativo({direccion,texto}) {
    return ( 
        <div className="container">

            <div className="cont-Icon">
                <Icon direc={direccion}/> 
            </div>
                
            <div className="cont-text">
                 <TextIcon textIcon={texto}/>
            </div>
            
        </div>
     );
}

export default IconoInformativo;