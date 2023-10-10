import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomList = () => {

    // Create array of objects which contain user name and its id
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
        <Text style = {styles.headings}>CustomList</Text>
       <ScrollView>

       {
            users.map((user) => (
                <Text key = {user.id} style = {styles.listText}>{user.name}</Text>
            ))
        }

       </ScrollView>
    </View>
  )
}

export default CustomList

const styles = StyleSheet.create({

    headings: {
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
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
    }

})