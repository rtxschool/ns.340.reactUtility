//helper functions


//necessary to make the price look neater 

  function format_price(content)
  {
      content = content.split('.');
      
      tmp = '';      
      
      c_at = 0;
      
      for (i = content[0].length - 1; i > -1; i = i - 1
           )
      {
          c_at ++;
          
          if (c_at == 4
             )
          {
             tmp += ","; c_at = 1;
          }
         
         tmp += content[0][i];
      }
      result = '';
      
      
      for (i = tmp.length
       - 1; i > -1; i = i - 1
           )
      {
          result += tmp[i];
      }
      
      result += "." + content[1];
      
      return "$" + result;
  }
      
 export
 {
    format_price
 }
