// import express from "express";
import WebSocket, { Event } from "ws";

// const app = express();
// const PORT = Number(process.env.PORT) || 8080;
// const hostname = "0.0.0.0";

// app.get("/", (_, res) => {
//   res.send({
//     message: "hello world",
//   });
// });

// app.listen(PORT, hostname, () =>
//   console.log(`server is running on port ${PORT}`)
// );

const startApp = () => {
  console.log("Start app");

  // Create WebSocket connection.
  const socket = new WebSocket(
    "wss://api.bitkub.com/websocket-api/market.trade.thb_kub"
  );

  // ws.on('open', function open() {
  //   console.log(`send: hello`);
  //   ws.send('something');
  // });

  // ws.on('message', function message(data) {
  //   console.log('received: %s', data);
  // });
  // Connection opened
  
  socket.addEventListener("open", function (event: Event) {
    console.log(event);
    socket.send("Hello Server!");
  });

  // Listen for messages
  socket.addEventListener("message", function (event) {
    console.log("Message from server ", event.data);
  });
};

startApp();
