import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '17/08/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '2.000,00',
    date: '17/08/2023',
    type: 1 // entradas
  },
  {
    id: 3,
    label: 'Transferência Y',
    value: '5.000,00',
    date: '17/08/2023',
    type: 1 // entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Usuário logado"/>

      <Balance saldo="9.250,00" gastos="-570,00"/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)} //converte item.id em string, obrigado ser string a key para keyExtractor
        showVerticalScrollIndicator={false}
        renderItem={({ item }) => <Text>TESTE</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },

  title: {
    marginTop: 14,
    marginRight: 14,
    marginLeft: 14,
    fontSize: 18,
    fontWeight: 'bold'
  },

  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
