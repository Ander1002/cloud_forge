<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <template>
          <v-list-item :to="{ name: 'Home'}">
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-title>
               Inicio
            </v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'Lista'}">
          <v-list-item-action>
            <v-icon>list</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Lista</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Practica Vue</v-toolbar-title>
    </v-app-bar>

    <v-content fluid fill-height>
      <v-container>
        <v-slide-y-transition mode="out-in">
          <router-view/>

        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>