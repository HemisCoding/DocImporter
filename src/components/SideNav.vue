<template>
    <v-app>
      <v-navigation-drawer v-model="drawer" app permanent>
        <v-list dense>
          <v-list-item-group>
            <!-- Documents -->
            <router-link to="/home/documents" exact>
              <v-list-item v-slot="{ active }" :value="active">
                <v-list-item-icon>
                  <v-icon>mdi-file-document</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Documents</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
    
            <!-- Sentiment Analysis -->
            <router-link to="/home/sentiment-analysis" exact>
              <v-list-item v-slot="{ active }" :value="active">
                <v-list-item-icon>
                  <v-icon>mdi-chart-bar</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Sentiment Analysis</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: true,
      };
    },
  };
  </script>
  