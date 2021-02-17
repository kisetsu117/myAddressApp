import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxpMeyEBJKK_3vSPvlnUy_BagPDOloCzQ",
  authDomain: "my-address-pj-dc0f0.firebaseapp.com",
  projectId: "my-address-pj-dc0f0",
  storageBucket: "my-address-pj-dc0f0.appspot.com",
  messagingSenderId: "632524492134",
  appId: "1:632524492134:web:3df6c381296e93f2058ca7",
  measurementId: "G-DHGPC572MW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
