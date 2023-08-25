import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native'

export default function Balance() {
  return (
    <View style={styles.container}>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>15.000,00</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>1.000,00</Text>
        </View>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -24,
        marginEnd: 14,
        marginStart: 14,
        paddingTop: 22,
        paddingEnd: 18,
        paddingStart: 18,
        paddingBottom: 22,
        borderRadius:4,
        zIndex: 99
    },

    item: {

    },

    itemTitle: {
        fontSize: 20,
        color: '#888'
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    currencySymbol: {
        color: '#888',
        marginRight: 6,
    },

    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },

    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }
})