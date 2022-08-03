import { createContext, useContext, useEffect, useState } from "react";

import { usePagamentoContext } from "./Pagamento";
import { UsuarioContext } from "./Usuario";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotalCarrinho,
        setValorTotalCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  const {
    carrinho,
    setCarrinho,
    quantidadeProdutos,
    setQuantidadeProdutos,
    valorTotalCarrinho,
    setValorTotalCarrinho,
  } = useContext(CarrinhoContext);
  const { formaDePagamento } = usePagamentoContext();
  const { saldo, setSaldo } = useContext(UsuarioContext);

  const mudarQuantidade = (id, quantidade) =>
    carrinho.map((itemDoCarrinho) => {
      if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
      return itemDoCarrinho;
    });

  function adicionarProduto(novoProduto) {
    const temOProduto = carrinho.some(
      (itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id
    );
    let novoCarrinho = [...carrinho];
    if (!temOProduto) {
      novoProduto.quantidade = 1;
      novoCarrinho.push(novoProduto);
      return setCarrinho(novoCarrinho);
    }
    novoCarrinho = mudarQuantidade(novoProduto.id, 1);
    setCarrinho(novoCarrinho);
  }
  const removerProduto = (id) => {
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1;
    let novoCarrinho;
    if (ehOUltimo) {
      novoCarrinho = carrinho.filter((item) => item.id !== id);
      return setCarrinho(novoCarrinho);
    }
    novoCarrinho = mudarQuantidade(id, -1);
    setCarrinho(novoCarrinho);
  };
  const efetuarCompra = () => {
    setCarrinho([]);
    setSaldo(saldo - valorTotalCarrinho);
  };

  useEffect(() => {
    let { novaQuantidade, novoTotal } = carrinho.reduce(
      (contador, novoItem) => ({
        novaQuantidade: contador.novaQuantidade + novoItem.quantidade,
        novoTotal: contador.novoTotal + novoItem.valor * novoItem.quantidade,
      }),
      { novaQuantidade: 0, novoTotal: 0 }
    );
    setQuantidadeProdutos(novaQuantidade);
    setValorTotalCarrinho(novoTotal * formaDePagamento.juros);
  }, [
    carrinho,
    formaDePagamento.juros,
    quantidadeProdutos,
    setQuantidadeProdutos,
    setValorTotalCarrinho,
  ]);

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidadeProdutos,
    setQuantidadeProdutos,
    valorTotalCarrinho,
    efetuarCompra,
  };
};
