import { useContext } from "react"
import { CarrinhoContext } from "../components/CarrinhoContext"
import ItemCarrinho from "../components/ItemCarrinho"
import produtos from "../Produtos"

function Carrinho() {
  const { carrinho } = useContext(CarrinhoContext)

  if(carrinho.length > 0) {
    return (
      <div>
        {carrinho.map(p => <ItemCarrinho key={p.id} id={p.id} qtd={p.qtd}/>)}
        <p>Total:{valorTotal()}</p>
      </div>
    )
  }else{
    return(
      <div>
        Carrinho vazio
      </div>
    )
  }

  function valorTotal(){
    var total = 0
    for (let i = 0; i < carrinho.length; i++) {
      const produto = produtos.find(p => p.id == carrinho[i].id)
      total += produto.preco * carrinho[i].qtd
    }
    return(total)
  }
}

export default Carrinho
