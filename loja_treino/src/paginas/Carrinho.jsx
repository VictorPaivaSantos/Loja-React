import { useContext } from "react"
import { CarrinhoContext } from "../components/CarrinhoContext"


function Carrinho() {
  const { carrinho } = useContext(CarrinhoContext)
  console.log(carrinho)
  return (
    <div>{carrinho.map(p => <div key={p.id}>{p.id}</div>)}</div>
  )
}

export default Carrinho
