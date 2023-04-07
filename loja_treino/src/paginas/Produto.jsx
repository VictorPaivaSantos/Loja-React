import { useParams } from "react-router-dom"
import produtos from "../Produtos"
import './Produto.css'
import { useContext } from "react"
import { CarrinhoContext } from "../components/CarrinhoContext"

const Produto = () => {
    const {id} = useParams()
    const produto = produtos.find(p => p.id == id)
    const  {addProdutoCarrinho } = useContext(CarrinhoContext)

    return (
      <div>
        <div className="info-produto">
          <h1>{produto.nome}</h1>
          <img src={produto.imagem} alt={produto.nome} />
          <p>{produto.descricao}</p>
        </div>
        <form>
          <h2>{produto.preco}</h2>
          {selecao(produto)}
          <button className="botao-comprar">Comprar</button>
          <button className="botao-add-carrinho" onClick={addProdutoCarrinho(produto.id)}>Adicionar ao carrinho</button>
        </form>
      </div>
    )
  }

function selecao (produto) {
  if(produto.cores.length > 0){
    return (
      <div>
        <label htmlFor="cor">Selecione uma cor</label>
          <select id="cor">
              <option value="1">Branco</option>
              <option value="2">Preto</option>
              <option value="3">Cinza</option>
          </select>
      </div>
    )}
  else{
    return
  }
}

export default Produto