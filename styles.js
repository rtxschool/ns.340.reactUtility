import React from 'react';

import type {Node} from 'react';
 

import {
  StyleSheet,
} from 'react-native';

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
         },
        
  h16: {      
     fontSize: 16,
  marginTop: 8, marginLeft: 8
         },
         
  fences_top:{ 
     borderTopColor: "rgb(100, 100, 100)", borderTopWidth: 2 
         },
         
  cmd:
  {  
    backgroundColor: "#A89912", marginTop: 28, marginRight: 18, marginLeft:18, borderRadius: 10, overflow: 'hidden'
    
  },
  txtCmd:
  {  fontSize: 18,
    backgroundColor: "#A89912",
    paddingTop:8, paddingBottom: 8, fontWeight: "bold", textAlign: "center", color: "rgb(100, 100, 200)"
  },







  imgIssue:
  {  
        margin: 28
  }
  }
  );

export { styles };

