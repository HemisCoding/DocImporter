<template>
    <v-container>
      <v-row>
        <!-- Sidebar -->
        <v-navigation-drawer permanent app>
          <v-list dense>
            <v-list-item-group>
              <!-- Documents -->
              <router-link to="/documents" exact>
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
              <router-link to="/sentiment-analysis" exact>
                <v-list-item v-slot="{ active }" :value="active">
                  <v-list-item-icon>
                    <v-icon>mdi-chart-bar</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Sentiment Analysis</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
  
              <!-- Settings -->
              <router-link to="/settings" exact>
                <v-list-item v-slot="{ active }" :value="active">
                  <v-list-item-icon>
                    <v-icon>mdi-settings</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Settings</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
  
        <!-- Main content -->
        <v-main>
          <router-view />
        </v-main>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  