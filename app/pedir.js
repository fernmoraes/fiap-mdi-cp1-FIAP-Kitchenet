import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Pedir() {
  const router = useRouter();
  const [carrinho, setCarrinho] = useState([]);

  // Itens disponíveis organizados por tipo
  const itensPorTipo = {
    Bebidas: [
      { id: '1', nome: 'Refrigerante', preco: 5.00 },
      { id: '2', nome: 'Suco', preco: 4.00 },
      { id: '3', nome: 'Água', preco: 2.00 },
    ],
    Lanches: [
      { id: '4', nome: 'Coxinha', preco: 8.00 },
      { id: '5', nome: 'Esfiha', preco: 10.00 },
      { id: '6', nome: 'Pão de Queijo', preco: 6.00 },
    ],
    Doces: [
      { id: '10', nome: 'Sorvete', preco: 7.00 },
      { id: '11', nome: 'Bolo', preco: 12.00 },
      { id: '12', nome: 'Chocolate', preco: 3.00 },
    ],
  };

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    alert(`${item.nome} adicionado ao pedido!`);
  };

  const renderTipo = (tipo, itens) => (
    <View key={tipo} style={styles.tipoContainer}>
      <Text style={styles.tipoTitulo}>{tipo}</Text>
      <View style={styles.itensRow}>
        {itens.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemNome}>{item.nome}</Text>
            <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
            <TouchableOpacity style={styles.botaoAdicionar} onPress={() => adicionarAoCarrinho(item)}>
              <Text style={styles.botaoAdicionarTexto}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fazer Pedido</Text>

      {Object.entries(itensPorTipo).map(([tipo, itens]) => renderTipo(tipo, itens))}

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.botaoVoltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#262626', padding: 16 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#F23064', textAlign: 'center', marginBottom: 20 },
  tipoContainer: { marginBottom: 20 },
  tipoTitulo: { fontSize: 20, fontWeight: 'bold', color: '#8C8C8C', marginBottom: 10 },
  itensRow: { flexDirection: 'row', justifyContent: 'space-between' },
  item: { backgroundColor: '#404040', padding: 12, borderRadius: 8, marginHorizontal: 4, flex: 1, alignItems: 'center' },
  itemNome: { color: '#fff', fontSize: 14, textAlign: 'center' },
  itemPreco: { color: '#8C8C8C', fontSize: 12, textAlign: 'center', marginVertical: 4 },
  botaoAdicionar: { backgroundColor: '#F23064', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 6, marginTop: 4 },
  botaoAdicionarTexto: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  botaoVoltar: { backgroundColor: '#8C8C8C', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  botaoVoltarTexto: { color: '#fff', fontWeight: 'bold' },
});