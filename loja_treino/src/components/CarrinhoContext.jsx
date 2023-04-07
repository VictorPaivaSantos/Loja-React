import { createContext, useEffect, useState } from "react"

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([])

    function addProdutoCarrinho(id){
        const carrinhoAux = [...carrinho]
        const item = carrinhoAux.find((p) => p.id == id)

        if(!item) {
            carrinhoAux.push({ id: id, qtd: 1 })
        } else {
            item.qtd += 1
        }
        
        useEffect(() => {
            setCarrinho(carrinhoAux)
        }, [])
    }

    function removeProdutoCarrinho(id) {
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, addProdutoCarrinho, removeProdutoCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
        )
  }

  
