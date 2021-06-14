import React from 'react'
import { ImageBackground, StyleSheet, Text, View ,Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




const CommingSoon = ({image,original_title, release_date}) =>{
  return (
         <View>
            <ImageBackground source={{uri:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg"}} style={styles.image}>
              <View>
                 <Text style={styles.date}>{ release_date}</Text>
                 <Text style={styles.film}>{original_title}</Text>
              </View>
           </ImageBackground> 
        </View>
)
}
const styles = StyleSheet.create({
    container:{
        //margin:10,
        

    },
    image:{
        resizeMode: "cover",
        justifyContent:'flex-end',
        height:screenHeight/3,
        width:screenWidth*0.45,
        padding:10,
        margin:6,
        borderRadius:50
    },
    film:{
        fontSize:15,
        color:'white',
        fontWeight:'bold',
        alignSelf:'center'
    },
    date:{
        fontSize:18,
        color:'white',
        alignSelf:'center'
       
    }
  
})

export default CommingSoon;


 {/* <View>
              <Icon name="heart" size={30} color="white" />
           </View> */}