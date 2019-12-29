import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCNkig3KtwuYkznIKNAH2wtkw4DGqEg2WY",
    authDomain: "vue-calender-d1195.firebaseapp.com",
    databaseURL: "https://vue-calender-d1195.firebaseio.com",
    projectId: "vue-calender-d1195",
    storageBucket: "vue-calender-d1195.appspot.com",
    messagingSenderId: "128993478325",
    appId: "1:128993478325:web:8b3f767a980352e4cae0fc"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')