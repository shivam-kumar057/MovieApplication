import React from 'react';
import { StyleSheet, View,Text} from 'react-native'



const BoldText = ({title,textStyle}) => {
    return (
        <View style={styles.container}>
        <Text style={[styles.titleStyle,textStyle]}>
            {title}
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    titleStyle:{
        fontSize:22,
       // letterSpacing:2
    }
})

export default BoldText;
