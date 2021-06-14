import React from 'react';
import { StyleSheet,Image, View, Text } from 'react-native';
import BoldText from './BoldText';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader = ({source,bgcolor,textStyle,title,heading,text,icon,onPress}) => {
    return (
        <View style={[styles.container,bgcolor]}>
            <View style={styles.innercontainer}>
                  {icon ? <Icon  name="navicon" size={30} color="#262626" />: <Icon1 onPress={onPress} name="arrow-back" size={35} color="white" />}
                <BoldText
                title={title}
                //textStyle={textStyle}
                />
                {
                    heading ? <BoldText
                    title={text}
                    />:null
                }
                <View style={{ flexDirection: 'row' }}>
                   { source ? <Icon2 name="face-profile" size={30} color="black" />
                    : null

                   }
                   
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      //  backgroundColor: '#ECE0E0',
       height:50,
        //justifyContent:'center'
         
    },
    innercontainer: {
        flexDirection: 'row',
      justifyContent: 'space-around',
        alignItems:'center',
       marginHorizontal:15,
      marginTop:12

    }
});
export default CustomHeader;
