import Vue from 'vue'
/**
 * import는 JS모듈화 ES6 문법
 */
// import App from './App.vue'
import Cart from "./Cart.vue";

// h는 기본 렌더링 함수
new Vue({
  el: '#app',
  render: h => h(Cart)
})
