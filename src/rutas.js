// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes que vas a usar en las rutas
import articuloInicio from './components/ArticuloInicio';
import listArticulos from './components/ListArticulos';
import crearArticulo from './components/CrearArticulo';
import editarArticulo from './components/EditarArticulo';

const routes = [
  { path: '/', component: articuloInicio },
  { path: '/inicio', component: articuloInicio },
  { path: '/articulos', component: listArticulos },
  { path: '/crear', component: crearArticulo, name: 'crearArticulo' },
  { path: '/editar/:id', component: editarArticulo, name: 'editarArticulo' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
