import { Outlet } from 'react-router-dom'
import Navegacao from './components/Header'

import './App.css'
import { CarrinhoProvider } from './components/CarrinhoContext'


function App() {

  return (
    <CarrinhoProvider>
      <div className="App">
        <Navegacao />
        <Outlet />
    </div>
    </CarrinhoProvider>
  )
}

export default App
