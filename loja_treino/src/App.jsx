import { Outlet } from 'react-router-dom'
import Header from './components/Header'

import './App.css'
import CarrinhoProvider from './components/CarrinhoContext'


function App() {

  return (
    <CarrinhoProvider>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </CarrinhoProvider>
  )
}

export default App
