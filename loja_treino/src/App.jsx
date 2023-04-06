import { Outlet } from 'react-router-dom'
import Navegacao from './components/Cabecalho'

import './App.css'


function App() {

  return (
    <div className="App">
      <Navegacao />
      <Outlet />
    </div>
  )
}

export default App
