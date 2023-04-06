import CardProduto from "../components/CardProduto"
import produtos from "../Produtos"
import './Listagem.css'

const Listagem = () => {
  return (
    <div className="container">
      <h2 className="title">Produtos</h2>
      <div className="produtos-container">
        {produtos.map((produto) => <CardProduto key={produto.id} produto={produto} />)}
      </div>
    </div>
  )
}

export default Listagem