import TittleRellenado from "../atoms/TitleRelleno";
import Text from "../atoms/Text";

function CardDown({titulo,texto}) {
    return (  
        <div>
            
            <TittleRellenado titulo={"titulo"}/>
           

            <div >
              <Text texto={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, maiores ullam! Placeat,"
               +"minus quod voluptatem pariatur voluptatibus neque cum voluptates est enim ad unde. Odit iure velit suscipit quia repellendus."}/>
            </div>

        </div>
    );
}

export default CardDown;