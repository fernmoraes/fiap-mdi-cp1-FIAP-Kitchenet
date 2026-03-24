import { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ℹ️ Sobre</Text>
      <Text style={styles.descricao}>Esse app foi feito na FIAP! 🚀</Text>
      <TouchableOpacity style={styles.botaoDeslogar} onPress={deslogar}>
        <Text style={styles.botaoDeslogarTexto}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#262626' },
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: '#F23064' },
  descricao:  { fontSize: 16, color: '#fff', marginBottom: 24 },
  botaoDeslogar: { backgroundColor: '#8C8C8C', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, marginBottom: 12 },
  botaoDeslogarTexto: { color: '#fff', fontWeight: 'bold' },
  voltar:     { fontSize: 16, color: '#F23064', fontWeight: '600' },
});