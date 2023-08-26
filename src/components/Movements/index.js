import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default function Movements({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        <Text 
            style={data.type === 1 ? styles.value : styles.expenses}
        >
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },

    date: {
        color: '#888',
        fontWeight: 'bold'
    },

    label: {
        fontWeight: 'bold',
        fontSize: 16
    },

    value: {
        color: '#2ecc71',
        fontSize: 16,
        fontWeight: 'bold'
    },

    expenses: {
        color: '#e74c3c',
        fontSize: 16,
        fontWeight: 'bold'
    }
})