<template>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img :src="require('../assets/planeta.jpg')" style="margin-top: 10%;" class="my-30" contain height="200"/>
        </v-col>
        <v-col class="mb-4">
          <h1 class="display-2 fonrt-weight-bold mb-">Inventario Supermarket</h1>
          <h2 class="display-2 fonrt-weight-bold mb-">ApiResful + vuejs3 + vuetify + CRUD</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <h3 class="footer-text">By: Leydy rodriguez for: intus</h3>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ArticuloInicio'
  }
  </script>
  
  <style>
  .footer-text {
    font-size: 14px; 
    color: #363534; 
    text-align: center; 
    margin-top: 20px; 
  }
  </style>
  