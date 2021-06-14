import React,{useState} from 'react'
import { StyleSheet,View,Text,ImageBackground,ScrollView,Dimensions } from 'react-native'
import CustomHeader from '../component/Project/CustomHeader'
import BoldText from '../component/Project/BoldText'
import CustomTouchable from '../component/Project/CustomTouchable'
import Icon from 'react-native-vector-icons/AntDesign';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const DetailScreen = ({route,navigation,switchColor}) =>{
    const[clickSwitch,setClickSwitch]=useState(false)
  return (
    <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
           <View style={styles.mainView} >
               <ImageBackground source={{uri:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg"}} style={styles.image}>
                    <CustomHeader onPress={()=>navigation.navigate('movie')} bgcolor={{marginTop:30}}/>
                    <View style={{bottom:10,paddingHorizontal:10}}>
                        <Text style={styles.date}>{route.params.item.release_date}</Text>
                        <Text style={styles.film}>{route.params.item.original_title}</Text>
                    </View>
               </ImageBackground>
           </View>

            <View style={styles.favourate}>
                 <View>
                    <Icon
                     onPress={()=>navigation.navigate('Trailer')}
                     name="playcircleo" size={30} color="white" />  
                     <Text style={styles.text}>Trailer</Text>
                 </View>
                 <View>
                    <Icon  onPress={()=>setClickSwitch(!clickSwitch)} style={{left:10}} name="heart" size={30} color={clickSwitch ?"red":"white" }/>   
                     <Text style={styles.text}>Favourite</Text>
                 </View>
                 <CustomTouchable onPress={()=>navigation.navigate('Review')} select={"Review"} text1={{color:'white'}} containers={{borderRadius:20,backgroundColor:'red'}}/>
            </View>
            <View>
               <BoldText title={"OverView"} textStyle={styles.Boldtext}/>
               <Text style={styles.overview}>{route.params.item.overview}</Text>
            </View>

            <View>
                <BoldText title={"Review"} textStyle={styles.Boldtext}/>
                <View style={{height:screenHeight/5,width:screenWidth*0.95,borderColor:'gray',borderWidth:1,margin:10}} >
                   <Text style={styles.overview}>{route.params.pushData}</Text>
                </View>
              
            </View>
           

      </ScrollView>
     
     
    </View>
  )
}
const styles = StyleSheet.create({
      container:{
          flex:1,
          backgroundColor:'black'
      },
      mainView:{
        height:screenHeight/1.45,
        width:screenWidth*1,
        backgroundColor:'gray'
      },
      image:{
        resizeMode: "cover",
        justifyContent:'space-between',
        height:"100%",
        width:"100%",
    },
    film:{
        fontSize:33,
        color:'white',
        fontWeight:'bold'
    },
    date:{
        fontSize:18,
        color:'white',
       
    },
    text:{
        color:'white'
    },
    favourate:{
        flexDirection:'row',
         justifyContent:'space-around',
         alignItems:'center',
         margin:10,
    },
    Boldtext:{
        fontWeight:"bold",
        color:'gray',
        marginLeft:20
    },
    overview:{
        margin:10,
        fontSize:18,
        color:'white'
    }
})

  

export default DetailScreen