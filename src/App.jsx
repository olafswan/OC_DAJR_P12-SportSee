import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/css/style.css'
import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className="main">
        <SideBar/>
        <main>
          <h1>Bonjour Thomas
          </h1>
        </main>
      </div>

    
     
    </>
  )
}

export default App
