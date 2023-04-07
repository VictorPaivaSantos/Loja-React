import { createContext, useState } from "react"

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([])

    function addProdutoCarrinho(id){
    }

    function removeProdutoCarrinho(id) {
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, addProdutoCarrinho, removeProdutoCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
        )
  }

  
