<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h2 class="display-2 font-weight-bold mb-3 pt-10 pb-1">
                    Listado de Productos
                </h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="mb-1">
                <v-col cols="auto">
                    <router-link :to="{name: 'crearArticulo'}">
                        <v-btn icon="mdi-plus" size="x-large" color="info"></v-btn>
                    </router-link>
                </v-col>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col cols="12">
                <v-table fixed-header class="elevation-3">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th class="text-center">Descripcion</th>
                                <th class="text-center">Precio</th>
                                <th class="text-center">Stock</th>
                                <th class="text-center">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="articulo in articulos" :key="articulo.id">
                                <td>{{ articulo.id }}</td>
                                <td>{{ articulo.descripcion }}</td>
                                <td>{{ articulo.precio }}</td>
                                <td>{{ articulo.stock }}</td>
                                <td class="actions-cell">
                                    <v-btn @click="dialog = true, id = articulo.id" icon="mdi-delete" size="small"></v-btn>
                                    <v-btn :to="{name: 'editarArticulo', params: {id: articulo.id}}" icon="mdi-pencil" size="small"></v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="350">
            <v-card>
                <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = false">Cancelar</v-btn>
                    <v-btn @click="confirmarBorrado" color="error">Aceptar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbar" color="success">{{ textsnack }}
            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<style scoped>
.v-table {
    width: 100%;
    margin: 0 auto;
}

.v-table th, .v-table td {
    padding: 8px;
    text-align: center;
    font-size: 18px
}

.actions-cell {
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-btn {
    margin: 0 4px;
}
</style>


<script>
import axios from 'axios';
export default {
    name: 'listArticulos',
    mounted() {
        this.obtenerProducto();
    },
    data() {
        return {
            dialog: false,
            articulos: null,
            id: null,
            snackbar: false,
            textsnack: '!producto eliminado!'
        };
    },
    methods: {
        obtenerProducto() {
            axios.get('http://localhost/apirest/productos.php')
                .then(r => {
                    this.articulos = r.data;
                    console.log(this.articulos);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        confirmarBorrado() {
            axios.delete('http://localhost/apirest/productos.php?id=' + this.id)
                .then(() => {
                    this.obtenerProducto();
                    this.dialog = false;
                    this.snackbar = true;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
