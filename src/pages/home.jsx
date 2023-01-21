import Header from "../componentes/moleculas/Header";
import Footer from "../componentes/moleculas/Footer"
import Body from "../componentes/moleculas/body";
import '../assets/Styles/App.css'
import db from "../DataBase/DataBase";
function Home() {

  return (
  <div className="App">

   <div id="cabeza">
    <h1>{db.infPersonal.nombre}</h1>
   </div>

   <div id="cuerpo">
        <Body/>
   </div>
   
   <div id="cuerpo-abajo">
      <Header/>
   </div>

   <div id="pie">
      <Footer/>
   </div>
  </div>
    
  )
}

export default Home;
