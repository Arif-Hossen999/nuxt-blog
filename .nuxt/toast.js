import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"top-center","action":{"text":"Cancel","onClick":(e, toastObject) => {
        toastObject.goAway(0);
      }}})

const globals = [{"name":"my-error","message":"Oops...Something went wrong","options":{"type":"error"}}]
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
