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
                    <v-btn color="info" @click="sendMessage()">Send</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-app>
</template>
<script>
import ws from "@/plugins/ws.js";
export default {
    data() {
        return {
            inputMessage: "",
        }
    },
    async created(){
        console.log(this.ws, "ws");
        // this.ws.connect()
    },
    methods: {
        async sendMessage(){

        },
        async receiveMessage(){

        }
    },
}
</script>