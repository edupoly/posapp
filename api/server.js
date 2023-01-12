const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(function(req,res,next){
  setTimeout(()=>{
    console.log('request recieved');
    next();
  },3000)
  
})
server.use(middlewares)
server.use(router)
server.listen(4001, () => {
  console.log('JSON Server is running')
})