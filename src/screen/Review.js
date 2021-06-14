import React,{useState} from 'react'
import { StyleSheet,View,Text,TextInput } from 'react-native'
import CustomTouchable from '../component/Project/CustomTouchable';

const Review = ({navigation,route}) =>{
    const [usersList, setUsersList] = useState("");
    const [temp,setTemp]=useState([]);
     const pushData = (pushTitle) => {
        let newArray = [...usersList];
        console.log(newArray);
        newArray.push(pushTitle);
        setUsersList(newArray);
      };
    return(
        <View style={styles.container}>
          <TextInput
           value={usersList} 
            color='black'
            multiline
            numberOfLines={4}
          style={styles.textinput}
          placeholder="Review"
          onChangeText={(text) => {
            setUsersList(text);
          }}
        />
            <CustomTouchable   
             select={"Add Review"} 
             text1={{color:'white'}}
             onPress={() => {
                navigation.navigate("Detail", {
                     pushData:usersList
                  //userId: usersList.length + 1,
                });
              }}
              containers={{borderRadius:20,backgroundColor:'#262626',marginTop:10}}/>
          
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        justifyContent:'center'
    },
    textinput: {
        height: 100,
        marginTop: 15,
        borderWidth: 1,
        
      },
    
})
export default Review;