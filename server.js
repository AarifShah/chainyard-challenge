const {createServer}=require('http')
const express = require('express')
const compression =require('compression')
const path = require('path')

const normalizePort = port => parseInt(port,10);
const PORT = normalizePort(process.env.PORT || 5000);
let app = express();

const dev = app.get('env')!== 'production'

if(!dev){

    app.disable('x-powered-by')
    app.use(compression())
    app.use(express.static(path.resolve(__dirname,'build')))
    app.get('*',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}

const server = createServer(app)

server.listen(PORT,function(){'node app is running on port',PORT});
