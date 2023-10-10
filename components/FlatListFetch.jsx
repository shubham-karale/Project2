import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatListFetch() {


    const users = [
        {
            id: 1,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 2,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 3,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 4,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 5,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 6,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 7,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 8,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 9,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },{
            id: 10,
            name: 'Lucifer',
            phoneNumber: "1234567890",
        },
    ]

  return (
    <View>
      <Text style = {styles.heading}>FlatListFetch</Text>

      
    </View>
  )
}

const UserData = (props) =>{
    const item  = props.item
    return(
        <View style = {styles.box}>
            <Text >{item.name}</Text>
            <Text>{item.id}</Text>
            <Text>{item.phoneNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    heading : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5c5b5b',
        marginLeft: 10,
        marginTop: 30,
        textAlign: 'center'
    },

    box : {
        backgroundColor: '#219ebc',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
    

})