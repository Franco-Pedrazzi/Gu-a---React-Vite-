import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [us, SetUs] = useState({
    userName:"",
    user:""
  })
  const Submit=()=>{
    console.log(us.name)
    console.log(us.userName)
  }
  const handle=(event)=>{
    const { name, value } = event.target;
 SetUs({...us,[name]:value})
  }
  return (
    <>
      <form onSubmit={Submit}>
      <input type='text' name='userName' value={us.userName} onChange={handle}></input>
      <input type='text' name='user' value={us.user} onChange={handle}></input>
      </form>
    </>
  )
}

export default App
