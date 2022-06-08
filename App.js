//The tool base


 

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View, useState, Button
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
//get the products screen 
   import {FrmProducts
          }  from './FrmProducts'         
          
            
//get the product screen
 import {FrmProduct} from './FrmProduct'
 
 

//get the primary screen
  import { FrmPrim } from './FrmPrim'
 

//the primary component
const App: () => Node = () => {
    
const Stack = createNativeStackNavigator();


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)"
  };  


const FrmPrim_ = ({ navigation }) => {
return (
<>
      
    < FrmPrim / >
 </>
      
          );
          };




const FrmProducts_
 = ({ navigation }) => { 
  return(<>
   <FrmProducts />
   </>
        );
        };        
      
      const FrmProd_  = ({ navigation, route
                        }) => { 
                        
                        
       return(<>
       <FrmProduct item={route.params.item}
       />
       </>
       );
       };
              
       
       
       
       
       
       
  return (   
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Prim"
          component={FrmPrim_}
          options={{ title: 'Main Screen'}}
        />
  
        <Stack.Screen
          name="Products"
          component={FrmProducts_}
          options={{ title: 'Products'}}
        />
  
        <Stack.Screen
          name="Product"
          component={FrmProd_}
          options = {{ title: 'Product'}}
        />
            </Stack.Navigator>
      </NavigationContainer>
  
  );
};

const styles = StyleSheet.create({
  h24: {
     fontSize: 28,
     textAlign: 'center',
    marginTop: 18     
       },       
  h20: {      
     fontSize: 20,
    textAlign: 'center',
   marginTop: 18
         },        
  h18: {      
     fontSize: 18,
  marginTop: 8, marginLeft: 8
         }
        }
        
      );
   

export default App;
