//This is the primary, or start screen


import React from 'react'; 

import type {Node} from 'react';


import { useNavigation } from '@react-navigation/native';


import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View, useState, Button, Pressable
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import { styles } from './styles'


import { NavigationContainer } from '@react-navigation/native';

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)"
  };



//This represents the template for 1 of the frameworks
renderFrame = ({item}) => {
        return (
            <View 
            >
               <Text
               style={[
          styles.text, styles.h18,
          {
            color: isDarkMode ?
             "rgb(220, 220, 220)" : "rgb(0, 0, 0)"
          },
          ]}
          >          
            ▘{item.r}
               </Text>
            </View>
         );
         };
  
//the array of framworks
const frms =
              [
                {r: "vbscript"},
                {r: "jscript"},
                {r: "jquery"}
              ];
    
//necessary to move to next screen           
const navigation = useNavigation();

//the primary component
const FrmPrim = () => {


  return (
     <SafeAreaView style={backgroundStyle}
     style={{flex: 1}}
     >
     <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
       
        <View
          style={
          {
            backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)"
          }}>
          <Text
          style={
          [styles.h24,
          styles.text,
          {
            color: isDarkMode ? "rgb(220, 220, 220)" : "rgb(0, 0, 0)",
          },
        ]}>
                 Utility React
          </Text>
          
          
          <Text
          style={[
          styles.text,
          {
            color: isDarkMode ? "rgb(220, 220, 220)" : "rgb(0, 0, 0)",
            marginLeft: 8
          },
        ]}
        >
                 This utility illustrates the utilization of React Native for UI development for Smart Apps.
                   The Text & Listview objects are explored.
          </Text>
          
          <Text
          style={[
          styles.text, styles.h20,
          {
            color: isDarkMode ? "rgb(220, 220, 220)" : "rgb(0, 0, 0)",
          },
          ]}
          >Common 
          Frameworks
          </Text>
          
              <FlatList data = {frms}              
              
              renderItem = {renderFrame}
                   keyExtractor={item => item.r}
                />            
          <Pressable 
          style = {[styles.cmd]}
            onPress={() =>
                navigation.navigate('Products', {}
                                     )
                    }
          >    
          <Text
             style = {[styles.txtCmd]}
          >
          Get Products
          </Text>
          </Pressable>                
              
         </View>
     </ScrollView>
  </SafeAreaView>
  
  );
 };

export { FrmPrim };

