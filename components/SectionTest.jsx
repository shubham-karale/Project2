import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionTest = () => {

    const datas = [
        { 
            id: 1,
            name: 'Shoe Yamato',
            data : [
                "Javascript","Java","Docker","React","React Native"
            ]

        },
        { 
            id: 2,
            name: 'Shoe Yamato',
            data : [
                "Javascript","Java","Docker","React","React Native"
            ]

        },
        { 
            id: 3,
            name: 'Shoe Yamato',
            data : [
                "Javascript","Java","Docker","React","React Native"
            ]

        },
        { 
            id: 4,
            name: 'Shoe Yamato',
            data : [
                "Javascript","Java","Docker","React","React Native"
            ]

        }
    ]

  return (
    <View>
      <Text style = {styles.heading}>SectionLists</Text>

        <SectionList sections={datas} renderItem={({item}) => <Text style = {styles.listText}>{item}</Text> }
        renderSectionHeader={({section}) => <Text style = {styles.heading}>{section.name}</Text> }
        />
        
    </View>
  )
}

export default SectionTest

const styles = StyleSheet.create({
    heading : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5c5b5b',
        marginLeft: 10,
        marginTop: 30,
        textAlign: 'center'
    },

    listText : {
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'pink',
        padding: 10,
        textAlign: 'center'
        
    }
    
    
})