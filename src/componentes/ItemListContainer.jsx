import './ItemListContainer.scss'

const ItemListContainer = ({ saludo })=> {
    return (
        <div id="App" className="ItemList">

        <h1>{saludo}</h1>

        </div>
    )
}

export default ItemListContainer