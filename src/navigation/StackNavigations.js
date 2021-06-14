import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieScreen from '../screen/MovieScreen';
import DetailScreen from '../screen/DetailScreen';
import TrailerScreen from '../screen/TrailerScreen';
import Review from '../screen/Review';

const Stack = createStackNavigator();
const StackNavigations = () =>{
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
            name="movie" 
            options={{
                headerShown: false
            }}
            component={MovieScreen} />
             <Stack.Screen 
            name="Detail" 
            options={{
                headerShown: false
            }}
            component={DetailScreen} />
             <Stack.Screen 
            name="Trailer" 
            options={{
                headerShown: false
            }}
            component={TrailerScreen} />
             <Stack.Screen 
            name="Review" 
            options={{
                headerShown: false
            }}
            component={Review} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
const styles = StyleSheet.create({
  
})

export default StackNavigations