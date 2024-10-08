<template>
    <v-container>
      <v-row>
        <!-- Import and render the SideNav component here -->
        <SideNav />
  
        <!-- Main content -->
        <v-main>
          <router-view />
        </v-main>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import SideNav from '@/components/SideNav.vue';  // Adjust the path accordingly
  
  export default {
    name: 'HomePage',
    components: {
      SideNav,
    },
  };
  </script>
  