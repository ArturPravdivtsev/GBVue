<template>
  <v-app>
    <v-app-bar app>
      <v-btn plain to="/dashboard">Dashboard</v-btn>
      <v-btn plain to="/about">About</v-btn>
      <v-btn plain to="/404">404</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
