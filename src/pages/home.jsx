import Header from "../componentes/organismos/Header";
import Footer from "../componentes/organismos/Footer"
import Body from "../componentes/organismos/Body";
import Cabeza from "../componentes/atoms/Cabeza";
import '../assets/Styles/App.css'
function Home() {

  return (
  <div className="App">

   <div id="cabeza">
      <Cabeza/>
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
