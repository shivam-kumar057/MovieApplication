import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import StackNavigations from './src/navigation/StackNavigations'


const App = () =>{
  return (
    <View style={{flex:1}}>
      <StackNavigations/>
    </View>
  )
}
const styles = StyleSheet.create({
  
})

export default App