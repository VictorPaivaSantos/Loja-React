import { useContext } from "react"
import { CarrinhoContext } from "../components/CarrinhoContext"


function Carrinho() {
  const { carrinho } = useContext(CarrinhoContext)
  return (
    <div>{}</div>
  )
}

export default Carrinho
