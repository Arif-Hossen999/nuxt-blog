<template>
  <v-app>
    <v-card width="400px" class="mt-5 mx-a">
      <v-card-title>
        <h1 class="dispay-1">Chat Room</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Message"
            v-model="inputMessage"
            prepend-icon="mdi-email"
          />
          <v-btn color="info" @click="sendMessage(inputMessage)">Send</v-btn>
        </v-form>
      </v-card-text>
      <hr />
      <p v-for="(m, index) in messages" :key="index">{{ m }}</p>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      chat: "",
      inputMessage: "",
      messages: ["Welcome to my ChatRoom"]
    };
  },
  // initialize websocket
  async created() {
    // console.log(this.$ws.connect(), "ws connect");
    this.initializeChatWs();
  },
  methods: {
    async initializeChatWs() {
      // connect websocket
      this.$ws.connect();
      // console.log(this.$ws.connect(), "ws_connect")
      // connect websocket with backend start/socket.js
      this.chat = this.$ws.subscribe("chat");
      let chat = this.chat;
      // message send to the user
      chat.on("ready", () => {
        this.sendMessage();
      });
      // message receive from the user
      chat.on("message", event => {
        //   console.log(event, "event");
        this.receiveMessage(event);
      });
      // chat.on('close', () => {
      // })
    },
    async sendMessage(message) {
      this.chat.emit("message",{
        userId: this.$auth.user.id,
        // userName : this.$auth.user.username,
        body: message
      });
    },
    async receiveMessage(msg) {
      this.messages.push(msg);
    }
  }
};
</script>
