import net from 'net'

const server = net.createServer((socket)=>{

})

server.listen(8000, ()=>{
    console.log("Server is running")
})