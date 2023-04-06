import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {BiStoreAlt, BiSearch, BiCart} from "react-icons/bi"

import './Cabecalho.css'

const Cabecalho = () => {
  const [pesquisa, setPesquisa] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!pesquisa) return

    navigate(`/pesquisa?q=${pesquisa}`)
    setPesquisa("")
  }

  return (
    <nav id="cabecalho">
        <h2>
            <Link to="/"><BiStoreAlt />Loja</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Buscar produto" 
              onChange={(e) => setPesquisa(e.target.value)}
              value={pesquisa}
            />
              <button type="submit">
                  <BiSearch />
              </button>
        </form>
        <h2>
          <Link to="/"><BiCart /></Link>
        </h2>
    </nav>
  )
}

export default Cabecalho