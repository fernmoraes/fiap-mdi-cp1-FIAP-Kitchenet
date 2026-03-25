import { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { isAuthenticated, logout } from './auth';

export default function Sobre() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/');
    }
  }, []);

  const deslogar = () => {
    logout();
    router.push('/');
  };

  // Dados mock de pedidos
  const pedidos = [
    { id: '1', nome: 'Hambúrguer', status: 'Entregue' },
    { id: '2', nome: 'Pizza', status: 'Em andamento' },
    { id: '3', nome: 'Salada', status: 'Cancelado' },
  ];

  const renderPedido = ({ item }) => (
    <View style={styles.pedidoItem}>
      <Text style={styles.pedidoNome}>{item.nome}</Text>
      <Text style={styles.pedidoStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>

      <View style={styles.pedidosContainer}>
        <Text style={styles.pedidosTitulo}>Pedidos Feitos</Text>
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item.id}
          renderItem={renderPedido}
          style={styles.pedidosList}
        />
      </View>

      <TouchableOpacity style={styles.botaoDeslogar} onPress={deslogar}>
        <Text style={styles.botaoDeslogarTexto}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#262626', padding: 16 },
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#F23064' },
  pedidosContainer: { width: '100%', marginBottom: 20 },
  pedidosTitulo: { fontSize: 20, fontWeight: 'bold', color: '#F23064', marginBottom: 10 },
  pedidosList: { maxHeight: 200 },
  pedidoItem: { backgroundColor: '#404040', padding: 12, borderRadius: 8, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' },
  pedidoNome: { color: '#fff', fontSize: 16 },
  pedidoStatus: { color: '#8C8C8C', fontSize: 14 },
  botaoDeslogar: { backgroundColor: '#8C8C8C', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8 },
  botaoDeslogarTexto: { color: '#fff', fontWeight: 'bold' },
});