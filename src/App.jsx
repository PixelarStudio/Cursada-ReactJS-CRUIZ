import './App.scss'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'


function App() {

  return (
   <div id="App" className="App">
    <NavBar />
    <ItemListContainer saludo={"Bienvenidos a mi Ecommerce"} />
   </div>
  )
}


export default App
