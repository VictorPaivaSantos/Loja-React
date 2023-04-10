import produtos from "../Produtos"
import { CarrinhoContext } from "../components/CarrinhoContext"
import { useContext } from "react"

const ItemCarrinho = ({id, qtd}) => {

    const  { removeProdutoCarrinho } = useContext(CarrinhoContext)

    const produto = produtos.find(p => p.id == id)

    return (
        <div className="item-carrinho">
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.nome}</p>
            <p><b>{"R$"+produto.preco}</b></p>
            <p>Quantidade: {qtd}</p>
            <p>{"R$"+produto.preco*qtd}</p>
            <button onClick={() => removeProdutoCarrinho(id)}>remover</button>
        </div>
    )
}

export default ItemCarrinho