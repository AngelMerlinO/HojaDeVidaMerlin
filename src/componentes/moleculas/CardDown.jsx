
function CardDown({titulo,texto}) {
    return (  
        <>
           <div>
                <div  className="sub-verde">
                    <h2>{titulo}</h2>
                </div>
           </div>
           <div >
                 <p>{texto}</p>
           </div>
        </>
  
    );
}

export default CardDown;