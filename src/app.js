import './app.scss'
import {
  Button,
} from 'element-ui'
import Vue from 'vue'

Vue.prototype.$ELEMENT = { size: 'small' }

Vue.use(Button)

export default new Vue({
  el: '#app',
  data() {
    return {}
  },
  mounted() {
    console.log(213)
  }
})
