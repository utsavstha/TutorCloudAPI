// const  app  =  require ( 'express' ) ( )  // Import express handle the connection 
// const  server  =  require ( 'http' ) . Server ( app )  // Mount Express HTTP server 
// const  io  =  require ( 'socket.io' ) ( server ) // Bind the HTTP server to socketio 
// const  dotenv  =  require ( 'dotenv' ) . config ( ) . parsed  // Here is just a package to import info from .env easily



// // Listen to the server on port 4444 
// server.listen ( 4444 )

// io . on ( 'connection' ,  socket  =>  { 
//   socket . on ( 'new-message' ,  ( request ,  socketOrigin )  =>  { 
//     // Here you can execute whatever you want 
//     console.log("test");
//   } )

//   socket . on ( 'event-name' ,  ( request ,  callback )  =>  { 
//     // Here you can execute whatever you want 
//   } ) 
// } );
//-----------
import Ws from 'App/Services/Ws'
Ws.boot()

// /**
//  * Listen for incoming socket connections
//  */
Ws.io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' })

  socket.on('shareRoom', (data) => {
    console.log(data)
    let roomId = data.roomId;
    let conversationId = data.conversationId;
    console.log("call_"+roomId);
    
    Ws.io.emit("call_"+conversationId, roomId);
  })

  socket.on('newConversation', (data) => {
    console.log(data)
    let userId = data.userId;
    
    Ws.io.emit("call_conversation"+userId, "");
  })
})
