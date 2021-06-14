import React from 'react'
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native'



const CustomTouchable = ({select,onPress,containers,text1}) =>{
  return (
      <TouchableOpacity style={[styles.container,containers]} onPress={onPress}>
          <Text style={[styles.text,text1]}>{select}</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        height: 48,
        width:150,
        backgroundColor:"white",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        borderRadius:8,
        elevation:10
    },
       text:{
           fontSize:20,
           color:'gray',
           
       }
})

export default CustomTouchable