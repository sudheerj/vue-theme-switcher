import Vue from 'vue'
import App from './App.vue'
import store from './store';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import './components/styled-components';
import './element-variables.scss';

Vue.config.productionTip = false;
Vue.use(Element, {locale});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

