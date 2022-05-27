
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View, useState
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)"
  };
  
  

const frms =
              [
                {r: "vbscript"},
                {r: "jscript"},
                {r: "jquery"}
              ];
  
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
               {item.r}
               </Text>
            </View>
         );
         };
     
     

      
            

  return (   
     <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? "rgb(0, 0, 0)" : "rgb(220, 220, 220)",
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
          >
          Frameworks
          </Text>
          
              <FlatList data = {frms}              
              
              renderItem = {renderFrame}
                   keyExtractor={item => item.r}
                />
        </View>
      </ScrollView>
    </SafeAreaView>
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
