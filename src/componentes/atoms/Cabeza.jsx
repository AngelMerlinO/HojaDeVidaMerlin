import db from '../../DataBase/DataBase';
import '../../assets/Styles/Cabecera.css'
import imgPersonal from "../../assets/Img/Angel.svg"
function Cabeza({}) {
    return ( 
        <>
        <div className='divInicio'>
            <div>
            <h1 className='titulo-cab'>{db.infPersonal.nombre}</h1>
            </div>
            <div>
            <h2 className='subtitulo-cab' >{db.infPersonal.ocucupacion}</h2>
            </div>
            <div className='img-personal'>
                <img src={imgPersonal} alt="" />
            </div>
            
        </div>
        </>
        
     );
}

export default Cabeza;