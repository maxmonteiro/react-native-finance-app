import React from 'react'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native'

export default function Movements({ data }) {
  return (
    <View style={styles.container}>
      <Text>{ data.label }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    }
})