<template>
  <v-container>
      <v-row class="text-center">
          <v-col class="mb-4">
              <h1 class="display-2 font-weight-bold mb-3">Creacion de producto</h1>
          </v-col>
      </v-row>

      <v-row>
          <v-col>
              <form v-on:submit.prevent="guardarArticulo()">
                  <v-text-field v-model="articulo.descripcion" 
                  label="Descripcion"
                  outlined
                  requiered
                  >
                  </v-text-field>

                  <v-text-field v-model="articulo.precio" 
                  label="Precio"
                  outlined
                  requiered
                  >
                  </v-text-field>

                  <v-text-field v-model="articulo.stock" 
                  label="Stock"
                  outlined
                  requiered
                  >
                  </v-text-field>
                  <v-card-actions>
                      <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>
                  </v-card-actions>
              </form>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name:'crearArticulo',
    data(){
        return{
            id:null,
            articulo:{
                descripcion:'',
                precio:'',
                stock:''
            }
        }
    },
    methods:{
        guardarArticulo(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('descripcion',this.articulo.descripcion);
           formData.append('precio',parseFloat(this.articulo.precio));
           formData.append('stock',this.articulo.stock);
           console.log(formData);
           axios.post('http://localhost/apirest/productos.php',formData)
           .then(()=>{
               router.push('/articulos');
           })
           .catch(function(error){
        console.log(error);
            });
        }
    }

}
</script>