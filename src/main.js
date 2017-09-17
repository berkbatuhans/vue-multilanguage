import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
/*
import jQuery from 'jquery'
global.jQuery = jQuery
import tether from 'tether'
global.Tether = tether;
import 'bootstrap/dist/css/bootstrap.css'

let Bootstrap = require('bootstrap');
*/
Vue.use(VueI18n)

const messages = {
  en: {
    "headerLink": {
      "home": "Home",
      "about": "About",
      "contact": "Contact"
    },
    "locale":{
      "tr": "Turkish",
      "en": "English"
    }
  },
  tr: {
    "headerLink": {
      "home": "Anasayfa",
      "about": "Hakkımızda",
      "contact": "İletişim"
    },
    "locale":{
      "tr": "Türkçe",
      "en": "İngilizce"
    }
  }
}

const i18n = new VueI18n({
  locale: 'tr',
  messages
})

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
