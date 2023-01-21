import db from "../../DataBase/DataBase.js";
import IconoInformativo from "./IconoInf";
import icoInstagram from "../../assets/Img/icons/facebook.png"
function Footer() {
    return ( 
        <>
        
          <IconoInformativo direccion={icoInstagram}texto={db.textIcon.instagram}/>
          
          <IconoInformativo direccion={db.infoIcons.iconFaceboo}texto={db.textIcon.facebook}/>

          <IconoInformativo direccion={db.infoIcons.iconCorreo}texto={db.textIcon.correo}/>
    
          <IconoInformativo direccion={db.infoIcons.iconUbicacion}texto={db.textIcon.ubicacion}/>        
           
      
        </>
       
     );
}

export default Footer;