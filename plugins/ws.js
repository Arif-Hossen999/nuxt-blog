// import 'babel/polyfill';
import Ws from "@adonisjs/websocket-client";
const ws = Ws("ws://localhost:3333");

export default (ctx, inject) => {
//   console.log(ctx);
//   console.log(ws);
//   ws.connect()
  ctx.$ws = ws;
  inject("ws", ws);
};