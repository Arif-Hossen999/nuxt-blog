<template>
  <v-app>
    <v-card width="400px" class="mt-5 mx-a">
      <v-card-title>
        <h1 class="dispay-1">Chat Room</h1>
      </v-card-title>
      <v-btn
        v-for="(user, i) in userDetails"
        :key="'A' + i"
        @click="showDetails(user.id, user.username)"
        >{{ user.username }}
        <!-- <v-icon v-if="messageCountersendUserId == user.id" small>
          {{ messageCounter }}
        </v-icon> -->
      </v-btn>
      <div v-if="isTrue">
        <!-- send message -->
        <v-card-text>
          <v-form onSubmit="return false;">
            <v-text-field
              label="Message"
              v-model="inputMessage"
              prepend-icon="mdi-email"
              @keyup.enter="sendMessage(inputMessage)"
            />
            <v-btn color="info" @click="sendMessage(inputMessage)">send</v-btn>
          </v-form>
        </v-card-text>
        <hr />
        <!-- show message -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Chat with : {{ receiveUserName }}</v-list-item-title
            >
            <!-- show db message -->
            <v-list-item
              color="primary"
              v-for="(m, index) in messages"
              :key="index"
              >{{ m.user_name }} : {{ m.message }}</v-list-item
            >
            <!-- show user send and recive message -->
            <v-list-item
              v-for="(m, index) in receiveMsg"
              :key="'b' + index"
              v-if="m.sendUserId == receiveUserId || m.sendUserId == checkUserId"
              >{{ m.sendUserName }} : {{ m.userMessage }}</v-list-item
            >
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
      receiveUserName: "",
      userDetails: [],
      chat: "",
      inputMessage: "",
      messages: [],
      receiveMsg: [],
      checkUserId: "",
      messageCounter: '',
      messageCountersendUserId: ""
    };
  },
  // initialize websocket
  async mounted() {
    // console.log(this.$ws.connect(), "ws connect");
    this.initializeChatWs();
    this.allUser();
  },
  watch: {
    // meessage count
    // messageCounter(value) {
    //   this.messageCounter = value;
    // }
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
    async showDetails(id, name) {
      try {
        // console.log(id, "id");
        // console.log(name);
        // this.messageCounter = '';
        this.receiveMsg = [];
        this.isTrue = true;
        this.checkUserId = this.$auth.user.id;
        this.receiveUserId = id;
        this.receiveUserName = name;
        await this.$axios.$get("/api/usermessage/" + id).then(response => {
          // console.log(response);
          this.messages = response;
        });
        // this.receiveMsg = "";
      } catch (error) {
        // console.log(error);
      }
    },
    async initializeChatWs() {
      try {
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
            // console.log(event, "event");
          this.receiveMessage(event);
        });
        chat.on('close', () => {
        })
      } catch (error) {
        // console.log(error);
      }
    },
    // send user details
    async sendUserDetails(info) {
      try {
        this.chat.emit("setusersocketid", {
          userId: this.$auth.user.id,
          userName: this.$auth.user.username
        });
      } catch (error) {
        // console.log(error);
      }
    },
    // send user message
    async sendMessage(message) {
      // try {
      // console.log(message);
      // this.messageCounter = "";
      this.chat.emit("message", {
        sendUserId: this.$auth.user.id,
        receiveUserId: this.receiveUserId,
        userName: this.$auth.user.username,
        body: message
      });
      // resetting the newMessage
      this.inputMessage = "";
      // this.receiveMsg = "";
      // this.$nuxt.refresh();
      // } catch (error) {
      //   console.log(error);
      //   if(error.length){
      //     this.$nuxt.refresh();
      //   }
      // }
    },
    async receiveMessage(msg) {
      // console.log("receive message");
      // console.log(msg);
      // this.messageCountersendUserId = msg.sendUserId;
      // this.messageCounter = 1;
      this.receiveMsg.push(msg);
      // console.log(this.receiveMsg, "Msg");
    }
  }
};
</script>

