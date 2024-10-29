const http = require('http');


const server= http.createServer((req,res) =>{
    res.write('mohemad \n')
    res.write('beddani')
    res.end()
})


server.listen(5000,()=>{console.log('mri9la')});