//This collects the products from the url
//if there are net issues, the user is presented the notice
//if there are no issues, the user is presented the list of products, their price, & image
 

import React, { useEffect, useState } from 'react';

import type {Node} from 'react';


import { useNavigation } from '@react-navigation/native';

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

import { styles } from './styles'

import
{
  format_price
} from './core'


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)"
  };
  

const url = "https://fakerapi.it/api/v1/products?_quantity=10&_locale=en_EN";

//necessary to get to next screen
    const navigation = useNavigation();
      
const FrmProducts = () => {

//is the request load finished
//  true = no
//  !true = yet
  const [isLoading, setLoading] = useState(true);

//are there net issues
  const [netIssue, setNetIssue] = useState(!true);  
  
//storate for returned data
  const [data, setData] = useState([]);
  
  const net_issue = !true;

//go get the products
 const getProducts = async () => {
     try{
       const reply = await fetch(url);
       const result = await reply.json();
       setData(result.data);
         }
         
         
         
      //there are issues..not sure what, but it must the the net          
      catch (issue)
      {
          setNetIssue(true);
          console.error(issue);
          setLoading(false);
      }
      finally
      {
         setLoading(false);
       }
     }  
     
  useEffect(() => {
    getProducts();
  }, []);
  
  //the primary component
  return (
  
     <SafeAreaView style={backgroundStyle}
     style={{flex: 1}}
     >
        <View
          style={[
            {
            backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)", flex: 1
            }
          ]}>
          
          {isLoading ? 
          <Text
          style = {[styles.h18]}
          >
          We strive for products
          </Text> 
           
          : 
          (
          netIssue ?
          <>
          <Image source={require('./issue.png')
                      }
            style={[styles.imgIssue
            ]}
          />
          <Text
          style = {[styles.h18]}
          >
          This tool could not locate the network.         
           
          </Text>
          <Text
          style = {[styles.h18]}
          >
          Treat the issue & return to the main screen
           
          </Text>
          </>
          :
          (
          <>
              <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
          <View
          style = {[
            styles.fences_top
                   ]}
          >
          <Pressable 
            onPress={() =>
                navigation.navigate('Product', {item}
                                     )
                    }
          >
          
        <Image source={{uri:item.image + "?" + item.upc
                      }}
            style={{ height: 64, width: 48}}
          />
               <Text
               style={[
          styles.text, styles.h16,
          {
            color: isDarkMode ?
             "rgb(220, 220, 220)" : "rgb(0, 0, 0)"
          }
          ]}
          > 
          {item.name}
          </Text>
               <Text
               style={[
          styles.text, styles.h18,
          {
            color: isDarkMode ?
             "rgb(220, 220, 220)" : "rgb(0, 0, 0)"
          },
          ]}
          > 
          {format_price(item.price)
          }
          </Text>
          </Pressable>
          </View>
          )}
        />
        </>
        )
        )
        }
        
        </View>
    </SafeAreaView>
 
  );
 };

export
{ 
   FrmProducts
}

