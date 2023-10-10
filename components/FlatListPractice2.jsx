import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListPractice2 = () => {

    const users = [
        { name: 'Lucifer', id: 1 },
        { name: 'Amygdil', id: 2 },
        { name: 'Chloe', id: 3 },
        { name: 'Espaniazola', id: 4 },
        { name: 'Linda', id: 5 },
        { name: 'Mez', id: 6 },
        { name: 'John Dekker', id: 7 },
        { name: 'Charolette', id: 8 },
        { name: 'Lucifer', id: 9 },
        { name: 'Amygdil', id: 10 },
        { name: 'Chloe', id: 11 },
        { name: 'Espaniazola', id: 12 },
        { name: 'Linda', id: 13 },
        { name: 'Mez', id: 14 },
        { name: 'John Dekker', id: 15 },
        { name: 'Charolette', id: 16 },
        
    ]


  return (
    <View>
      <Text>FlatList Practice  2</Text>

        <FlatList data={users} renderItem={({item}) => <Text style = {styles.listText}>{item.name}</Text> } />

    </View>
  )
}

export default FlatListPractice2

const styles = StyleSheet.create({
    heading : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5c5b5b',
        marginLeft: 10,
        marginTop: 30,
        textAlign: 'center'
    },
    listText: {
        fontSize: 18,
        color: '#5c5b5b',
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'pink',
        padding: 10,
        textAlign: 'center'
    }
})