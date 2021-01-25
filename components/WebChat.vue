<template>
  <v-app>
    <v-card width="400px" class="mt-5 mx-a">
      <v-btn
        v-for="(user, i) in userDetails"
        :key="'A' + i"
        @click="showDetails(user.id)"
        >{{ user.username }}</v-btn
      >

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
      <!-- show message -->
      <div v-if="isTrue">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Welcome to my ChatRoom</v-list-item-title>
            <!-- show db message -->
            <v-list-item color="primary"
             v-for="(m, index) in messages" :key="index"
            >{{ m.message }}</v-list-item>
            <!-- show user send message -->
            <v-list-item
            v-for="(m, index) in receiveMsg" :key="'b' + index"
            >{{ m }}</v-list-item>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      isTrue: false,
      receiveUserId: "",
      userDetails: [],
      chat: "",
      inputMessage: "",
      messages: [],
      receiveMsg: []
    };
  },
  // initialize websocket
  async mounted() {
    // console.log(this.$ws.connect(), "ws connect");
    this.initializeChatWs();
    this.allUser();
  },
  methods: {
    // show user name
    async allUser() {
      try {
        await this.$axios.$get("/api/alluser").then(response => {
          // console.log(response);
          this.userDetails = response;
          // console.log(this.userDetails , "userDetails");
        });
      } catch (error) {
        // console.log(error);
      }
    },
    // show user messages
    async showDetails(id) {
      this.isTrue = true;
      this.receiveUserId = id;
      await this.$axios.$get("/api/usermessage/" + id).then(response => {
        console.log(response);
        this.messages = response;
      });
      // this.receiveMsg = "";
    },
    async initializeChatWs() {
      // connect websocket
      this.$ws.connect();
      // console.log(this.$ws.connect(), "ws_connect")
      // connect websocket with backend start/socket.js
      this.chat = this.$ws.subscribe("chat");
      let chat = this.chat;
      // message send to the user
      chat.on("ready", () => {
        this.sendUserDetails();
        // this.sendMessage();
      });
      // message receive from the user
      chat.on("message", event => {
        //   console.log(event, "event");
        this.receiveMessage(event);
      });
      // chat.on('close', () => {
      // })
    },
    // send user details
    async sendUserDetails(info) {
      this.chat.emit("setusersocketid", {
        userId: this.$auth.user.id
      });
    },
    // send user message
    async sendMessage(message) {
      this.chat.emit("message", {
        sendUserId: this.$auth.user.id,
        receiveUserId: this.receiveUserId,
        // userName : this.$auth.user.username,
        body: message
      });
      // resetting the newMessage
      this.inputMessage = "";
      // this.receiveMsg = "";
      // this.$nuxt.refresh();
    },
    async receiveMessage(msg) {
      this.receiveMsg.push(msg);
    }
  }
};
</script>
