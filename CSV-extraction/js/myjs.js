
getData();
async function getData(){
   
   const response= await fetch('test.csv');
   const data = await response.text();
   // document.getElementById("text").innerText=data; // displaying data in DOM
   const rows = data.split("\n");
  
   var renderer = await createTable_Json(rows);
   console.log(renderer.table);
   document.getElementById("text").innerText=renderer.json;
}


async function createTable_Json(rows){
   var i=0;
   var table = "<table border=1>";
   var json="[";
 
   var head_columns =   rows[0].split(",");
   rows = rows.slice(1);
   while(rows[i]){
      var j=0;
      var columns = rows[i].split(",");
      if(columns.length>0){
         json+="{";
         table += "<tr>";
         while(columns[j]){ 
            json+= '"'+head_columns[j]+'" : ' + '"'+columns[j]+'"';
            json+= (j<columns.length-1) ? ",":"";

            table += i==0 ?  "<th>"+columns[j]+"</th>" :  "<td>"+columns[j]+"</td>";
            
            j++;
         }
         table += "</tr>";
         json+="}";
         json+= (i<rows.length-1) ? ",":"";  
      }
      
      rows[i];
      i++;
   }
   json+="]";
   table += "</table>";


   var renderer = {
      "table":table,
      "json":json
   };
   return renderer;
}