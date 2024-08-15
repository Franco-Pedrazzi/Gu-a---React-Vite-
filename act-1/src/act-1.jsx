import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [us, SetUs] = useState({
    userName:"",
    userGmail:""
  })
  const [aux, SetAux] = useState([])
  const handle=(event)=>{
    const { name, value } = event.target;
 SetUs({...us,[name]:value})
 console.log(us)
  }
  const send=(event)=>{
    event.preventDefault();
    if(us["userName"]!=""){
      console.log("el Nombre del usuario es: "+us["userName"])
      console.log("el Gmail del usuario es: "+us["userGmail"])
    }
    else{
      console.log("Inserte Nombre de usuario")
    }
  }
  return (
    <>
    <form onSubmit={send}>
      <h2>Inserte Nombre de usuario</h2>
      <input type='text' name='userName' value={us.userName} onChange={handle}></input>
      <h2>Inserte Gmail del usuario</h2>
      <input type='email' name='userGmail' value={us.user} onChange={handle}></input>
      <br></br>
      <button type='submit'>enviar</button>
      </form>
    </>
  )
}

export default App
