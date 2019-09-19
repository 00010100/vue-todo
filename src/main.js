import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import Loader from '@/components/Loader';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.component('Loader', Loader);

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app');
