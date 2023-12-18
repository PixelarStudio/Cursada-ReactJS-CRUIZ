import './App.scss'
import EjemploChildren from './componentes/Ejemplos/EjemploChildren'
import EjemploContador from './componentes/Ejemplos/EjemploContador'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'


function App() {

  return (
   <div id="App" className="App">
    <NavBar />
    <ItemListContainer saludo={"Bienvenidos a mi Ecommerce"} >
    <EjemploChildren />
    </ItemListContainer>
    <EjemploContador />
    <ItemCount stock = {10} />
    <ItemCount stock = {20} />
    
   </div>
  )
}


export default App
