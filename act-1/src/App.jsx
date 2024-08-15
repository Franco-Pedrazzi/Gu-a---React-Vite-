import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Carga from "./componentes/Carga.jsx";
import './App.css'

function App() {
const [productos,SetProductos]=useState()

  return (
    <>
    <Carga SetProductos={SetProductos()}></Carga>
    <ul>
    {productos.map((producto)=><li>{producto["title"]}. <h4>Price:{producto["price"]}</h4></li>)}
    </ul>

    </>
  )
}

export default App
