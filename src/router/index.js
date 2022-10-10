// 1. Define route components.
// These can be imported from other files
import {createRouter,createWebHashHistory} from 'vue-router';
import HomeView  from '../views/HomeView.vue';
import RutasView from '../views/RutasView.vue';
import MapasView from  '../views/MapasView.vue';
import GuiasView from '../views/GuiasView.vue';
import LoginView from '../views/LoginView.vue';
import ProfileView from '../views/ProfileView.vue';
import SettingsView from '../views/SettingsView.vue';
import ApiView from '../views/SettingsView.vue'
/* import App from '../App.vue'; */

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/',
    name: HomeView, 
    component: HomeView,
  },
  { path: '/rutas',
    name: RutasView, 
    component: RutasView},
  { path: '/guias',
    name: GuiasView, 
    component: GuiasView},
  { path: '/mapa',
    name: MapasView, 
    component: MapasView},
    { path: '/api',
    name: ApiView, 
    component: ApiView},
  { path: '/login',
    name: LoginView, 
    component: LoginView},
  { path: '/profile',
    name: ProfileView, 
    component: ProfileView},
  { path: '/settings',
    name: SettingsView, 
    component: SettingsView},
 /*  { path: '/about', component: About }, */
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history:createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

export default router;

// Now the app has started!