import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {

    const [count,setCount] = useState(0)

    useEffect(() => {console.warn('useEffect Called')} , [count])

  return (
    <View>
      <Text style = {styles.heading}>UseEffectHooks</Text>

        <Button title = "Press Here" onPress = {setCount(count+1)} />

    </View>
  )
}

export default UseEffectHooks

const styles = StyleSheet.create({
    heading : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5c5b5b',
        marginLeft: 10,
    },
    
})