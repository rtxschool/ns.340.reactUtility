//Represents 1 product


import React, { useEffect, useState } from 'react'; 

import type {Node} from 'react';

import { useNavigation } from '@react-navigation/native';

//necessary to make the price look neater
import
{
  format_price
} from './core'

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme, Image, uri, Pressable,
  View
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//custom  styles
import { styles } from './styles'

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)"
  };
  

    const navigation = useNavigation();
      
     
   
  
//recieves the entire item
const FrmProduct = (props) => {
    
  
  return (
  
     <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={[
            {
            backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)",
            }
          ]}>
          <Text
             style={[
               styles.h18
                   ]}
          >
          Product
          </Text>
          
          
        
        
           <Text
             style={[
               styles.h16
                   ]}
          >
          {props.item.name}
          </Text>
          
          
        
           <Text
             style={[
               styles.h18, styles.fences_top
                   ]}
          >
          Title
          </Text>
        

           <Text
             style={[
               styles.h16
                   ]}
          >
          {props.item.images[0].title}
          </Text>
        
           <Text
             style={[
               styles.h18, styles.fences_top
                   ]}
          >
          Product UPC
          </Text>
        

           <Text
             style={[
               styles.h16
                   ]}
          >
          {props.item.upc}
          </Text>
        
           <Text
             style={[
               styles.h18, styles.fences_top
                   ]}
          >
          Price
          </Text>
        

           <Text
             style={[
               styles.h16
                   ]}
          >
         {
         format_price(props.item.price
                       )
         }       
          </Text>
        
<Image source={{uri:props.item.image + "?" + props.item.upc
              }}
              
            style={{ height: 640, width: 480
                 }
                 }
          />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  
  );
 };

export { FrmProduct }


