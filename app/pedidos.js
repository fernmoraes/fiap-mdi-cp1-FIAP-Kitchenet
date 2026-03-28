let listaPedidos = [];

export function adicionarPedido(itens) {
  listaPedidos.push({
    id: String(Date.now()),
    itens,
    data: new Date().toLocaleDateString('pt-BR'),
  });
}

export function getPedidos() {
  return listaPedidos;
}
