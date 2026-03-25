import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Pedir() {
  const router = useRouter();
  const [carrinho, setCarrinho] = useState([]);

  // Itens disponíveis
  const itens = [
    { id: '1', nome: 'Hambúrguer', preco: 15.00 },
    { id: '2', nome: 'Pizza', preco: 25.00 },
    { id: '3', nome: 'Salada', preco: 10.00 },
    { id: '4', nome: 'Refrigerante', preco: 5.00 },
  ];

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    alert(`${item.nome} adicionado ao pedido!`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.botaoAdicionar} onPress={() => adicionarAoCarrinho(item)}>
        <Text style={styles.botaoAdicionarTexto}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fazer Pedido</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.lista}
      />

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.botaoVoltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#262626', padding: 16 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#F23064', textAlign: 'center', marginBottom: 20 },
  lista: { flex: 1 },
  item: { backgroundColor: '#404040', padding: 16, borderRadius: 8, marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  itemNome: { color: '#fff', fontSize: 16, flex: 1 },
  itemPreco: { color: '#8C8C8C', fontSize: 14, marginRight: 10 },
  botaoAdicionar: { backgroundColor: '#F23064', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6 },
  botaoAdicionarTexto: { color: '#fff', fontWeight: 'bold' },
  botaoVoltar: { backgroundColor: '#8C8C8C', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  botaoVoltarTexto: { color: '#fff', fontWeight: 'bold' },
});