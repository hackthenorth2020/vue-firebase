<template>
  <v-container class="ma-6">
    <v-card class="pa-6" outlined>
      <v-card-title class="justify-center">
        <h3>What Days Are You Available</h3>
      </v-card-title>
      <v-form>
        <v-text-field
          v-model="text"
          label="Date"
          placeholder="Monday, etc.."
          prepend-inner-icon="mdi-calendar"
          outlined
        />
      </v-form>
  </v-card>
  </v-container>
</template>

<script>

  export default {
    data () {
        
      return {
        picker: new Date().toISOString().substr(0, 10),
        
      }
    },
  }
</script>

<style>

</style>
