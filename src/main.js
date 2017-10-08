import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' 
import VueRouter from 'vue-router'
          
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode:'history'
});


// gloable custom directives

// Vue.directive('rainbow',function(el, binding,vnode){
//   el.style.color = '#' + Math.random().toString().slice(2,8);
// });

Vue.directive('theme',function(el, binding,vnode){
  if(binding.value == 'wide'){
    el.style.maxWidth = 1200+'px';
  }else if(binding.value == 'narrow'){
    el.style.maxWidth = 560+'px';
  }

  console.log(binding);
  if(binding.arg == 'column'){
    el.style.background = '#ddd';
    el.style.padding = '20px';
  }
});
// gloable filters
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// });

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...'
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
