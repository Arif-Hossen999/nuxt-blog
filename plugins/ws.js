// import websocket for live chat
import Vue from "vue";
import Ws from '@adonisjs/websocket-client'
// const ws = Ws('ws://localhost:3333')
// Vue.use(ws);
// const CarComponent = () => {
//         return {
//             msg: 'hello',
//             whatever: 'hi'
//         }
// }

// console.log(ws, "ws.js");
// const x = () => {
//   return "test";
// };
export default function () {
    return {
                    msg: 'hello',
                    whatever: 'hi'
                }
}
