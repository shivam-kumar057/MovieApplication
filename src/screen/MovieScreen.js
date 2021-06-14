import React,{useState,useEffect} from 'react'
import { StyleSheet,View,Text,FlatList,StatusBar } from 'react-native'
import BoldText from '../component/Project/BoldText'
import CommingSoon from '../component/Project/CommingSoon'
import CustomHeader from '../component/Project/CustomHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'



const MovieScreen = ({navigation}) =>{
      const [data,setData] =useState([])

      useEffect(()=>{
          const fetchData =async ()=>{
              const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63")
              setData(res.data.results)
              console.log("data===",res.data.results)
          }
          fetchData();
      },[]);
  return (
    <View style={styles.container}>
         <StatusBar barStyle='light-content' translucent backgroundColor="gray" />
       <CustomHeader
            source
            heading
            icon
            bgcolor={{backgroundColor:"gray", marginTop:23}}
            text={"Film"}
            />


            <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:10,}}>
               <BoldText title={"Movie"} textStyle={styles.boldText}/>
            </View>
    

             <View style={styles.commingSoon}>
                <FlatList
                   data={data}
                   numColumns={2}
                   keyExtractor={item => item.id}
                   renderItem={({item})=>{
                       return(
                           <TouchableOpacity onPress={()=>navigation.navigate("Detail",{item:item})}>
                                <CommingSoon
                                        original_title={item.original_title}
                                        release_date={item.release_date}
                                        />
                           </TouchableOpacity>
                       )
                   
                   }}
                 /> 
             </View>  
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#262626'
    },
    commingSoon:{
       justifyContent:'center',
       alignItems:'center',
    },
    boldText:{
      fontSize:30,color:"white"
    }
})

export default MovieScreen;