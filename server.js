const express =require("express");
const fs = require('fs');
const router = require('./routes/router.js')
const routerFr = require('./routes/routerFr.js')

const app = express();

app.use('/nl', router);
app.use('/fr', routerFr);

  
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


