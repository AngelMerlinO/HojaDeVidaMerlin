
function Card({titulo,texto,direcIcon}) {
    return ( 
        <>
  
            <div>
            <img src={direcIcon} alt="" />
            </div>

            <div>
                <h2>{titulo}</h2>
            </div>
            <div>
                <p>{texto}</p>
            </div> 
      
        </>
     );
}

export default Card;