import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";



const CustomMovie = ({image,Film,releaseData,text,popularity}) =>{
  return (
    <View style={styles.container}>
       <ImageBackground source={{uri:"https://i.pinimg.com/736x/11/03/fc/1103fc76b82d5b29e66fddffbab6a84c.jpg"}} style={styles.image}>
           <Text style={styles.date}>{releaseData}</Text>
           <Text style={styles.film}>{popularity}</Text>
       </ImageBackground> 
      {/* <Text>{text}</Text> */}
     
   
    
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:'white',
        elevation:10

    },
    image:{
        resizeMode: "cover",
        justifyContent:'flex-end',
        height:150,
        width:150,
        padding:20,
       
    },
    film:{
        fontSize:33,
        color:'white',
        fontWeight:'bold'
    },
    date:{
        fontSize:18,
        color:'white',
       
    }
  
})

export default CustomMovie;