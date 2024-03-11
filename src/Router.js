// // router.js

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
// import AboutUs from './components/navbar/About.vue';
// Vue.use(VueRouter);

// const routes = [
//     {
//         path: '/',
//         name: 'HelloWorld',
//         component: HelloWorld // Corrected the semicolon to a colon
//       },
//   {
//     path: '/about',
//     name: 'AboutUs',
//     component: AboutUs
//   }
//   // Add more routes as needed
// ];

// const router = new VueRouter({
//   mode: 'history',
//   routes
// });

// export default router;


import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'; // Import your components
import AboutUs from './components/navbar/About.vue'; //

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
