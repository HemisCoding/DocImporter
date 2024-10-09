<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <h1>Documents Page</h1>
          <p>This is where documents-related content will go.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-btn @click="openGoogleDrive">
            <v-icon left>mdi-upload</v-icon>
            Upload to Google Drive
        </v-btn>
      </v-row>
    </v-container>
  </template>

<script>
import { gapi } from 'gapi-script';


  
export default {
    data() {
      return {
        clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Obținut de la Google Cloud
        apiKey: 'YOUR_API_KEY', // Obținut de la Google Cloud
        scope: 'https://www.googleapis.com/auth/drive.file',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      };
    },
    
    methods: {
      openGoogleDrive() {
        gapi.load('client:auth2', () => {
          gapi.client.init({
            apiKey: this.apiKey,
            clientId: this.clientId,
            discoveryDocs: this.discoveryDocs,
            scope: this.scope,
          }).then(() => {
            gapi.auth2.getAuthInstance().signIn().then(() => {
              // Redirectează către Google Drive sau folosește API-ul pentru a deschide un picker
              window.open('https://drive.google.com/drive/my-drive', '_blank');
            });
          });
        });
      },
    },
  };
  </script>
  