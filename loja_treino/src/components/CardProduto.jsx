import { Link } from "react-router-dom"
import './CardProduto.css'

const CardProduto = ({produto}) => {
  return (
    <div className="card-produto">
        <Link to={`/produto/${produto.id}`}>
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.nome}</p>
            <p><b>{"R$"+produto.preco}</b></p>
        </Link>
    </div>
    
  )
}

export default CardProduto