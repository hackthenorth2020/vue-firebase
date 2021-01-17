<template>
  <div>
    <v-card>
      <v-card-title>Send a small introduction and availability!</v-card-title>
      <v-text-field label="Introduction and availbility" outlined>
      </v-text-field>
      <v-btn
        primary
        large
        block
        class="px-4, blue--text"
        outlined
        @click="loginUser()"
      >
        Login
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    loginUser() {
      this.$alert("Successfully Paired", "Success", "success").then(() => {
        this.$router.push("/dashboard");
      });
    },
  },
};
</script>

<style></style>
