import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Icon from "../atoms/icon";


function Card({titulo,texto,direcIcon}) {
    return ( 
        <>
       
        <Icon direc={direcIcon}/>
        <Title msn={titulo}/>
        <Text texto={texto}/>
        
        
        </>
     );
}

export default Card;