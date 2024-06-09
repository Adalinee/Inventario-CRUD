<script setup>
import {RouterLink,RouterView} from 'vue-router'
</script>
<template>
  <v-card>
    <v-layout>
      <v-app-bar
        color="info"
        prominent
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Hacienda Mi Granjita</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-container>
          <v-row
            class="fill-height"
            justify="center"
          >
            <v-col cols="12">
              <v-list>
                <RouterLink to='/'>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon>mdi-{{ icons[0] }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </RouterLink>

                <RouterLink to="/articulos">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon>mdi-{{ icons[1] }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Artículos</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </RouterLink>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-navigation-drawer>

      <v-main style="height: 100vh;">
        <RouterView></RouterView>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
  export default {
    name: 'App',
    data: () => ({
      icons: ['home', 'shopping'],
      drawer:false,
    }),
  };

</script>

