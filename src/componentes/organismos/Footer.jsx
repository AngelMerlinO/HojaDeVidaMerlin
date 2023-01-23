import db from "../../DataBase/DataBase.js";
import IconoInformativo from "../moleculas/IconoInf";
import icoInstagram from "../../assets/Img/icons/instagram.png"
import iconFacebook from "../../assets/Img/icons/facebook.png"
import iconCorreo from '../../assets/Img/icons/correo.png'
import iconUbicacion from '../../assets/Img/icons/ubicacion.png'

function Footer() {
    return ( 
        <>
        
          <IconoInformativo direccion={icoInstagram}texto={db.textIcon.instagram}/>
          
          <IconoInformativo direccion={iconFacebook}texto={db.textIcon.facebook}/>

          <IconoInformativo direccion={iconCorreo}texto={db.textIcon.correo}/>
    
          <IconoInformativo direccion={iconUbicacion}texto={db.textIcon.ubicacion}/>        
           
      
        </>
       
     );
}

export default Footer;