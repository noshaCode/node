const express =require("express");
const fs = require('fs');

const app = express();

  
app.get("/",(request,response)=>{
    fs.readFile('index.html', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        response.send(data)
    })
    
})



app.listen(3002)


