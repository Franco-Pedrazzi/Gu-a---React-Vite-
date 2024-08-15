import { useEffect, useState } from 'react'
function Carga(pront){
    const   [productos,SetProductos]=useState(pront.SetProductos)
    const [loading,SetLoading]=useState(true)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
                  .then(res=>res.json())
                  .then((json)=> {SetProductos(json)})
        SetLoading(false)
        
      },[])
return(
    <>
    {loading && <h2>Cargando</h2>}
    </>
)
}
export default Carga