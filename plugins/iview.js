import Vue from "vue";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
Vue.use(ViewUI);

export default {
    
        methods: {
          s(msg, title = "Great!") {
            this.$Notice.success({
              title: title,
              desc: msg
            });
          },
          swr(msg, title = "Oops!") {
            this.$Notice.success({
              title: title,
              desc: msg
            });
          }
        }

}

