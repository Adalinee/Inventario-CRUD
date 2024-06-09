import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes para las rutas
import articuloInicio from './components/ArticuloInicio';  
import listArticulos from './components/ListArticulos';
import crearArticulo from './components/CrearArticulo';
import editarArticulo from './components/EditarArticulo';

loadFonts();

// Define las rutas de la aplicación
const routes = [
    { path: '/', component: articuloInicio },
    { path: '/inicio', component: articuloInicio },
    { path: '/articulos', component: listArticulos },
    { path: '/crear', component: crearArticulo, name: 'crearArticulo' },
    { path: '/editar/:id', component: editarArticulo, name: 'editarArticulo' }
];

// Crea el router con la configuración de historial web
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Crea la instancia de la aplicación
const app = createApp(App);

// Usa Vuetify y el router
app.use(vuetify);
app.use(router);

// Monta la aplicación
app.mount('#app');
