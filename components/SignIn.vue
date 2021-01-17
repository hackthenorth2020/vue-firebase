<template>
  <v-container class="ma-6">
    <v-card class="pa-6">
      <v-card-title class="justify-center">
        <h5>Login</h5>
      </v-card-title>
      <v-form>
        <v-text-field
          :rules="[rules.required, rules.email]"
          v-model="email"
          label="Email"
          outlined
          prepend-inner-icon="mdi-email"
        />
        <v-text-field
          :rules="[rules.required, rules.counter]"
          counter
          minlength="6"
          v-model="password"
          label="Password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
          outlined
          prepend-inner-icon="mdi-lock-outline"
        />
        <v-btn primary large block class="px-4, blue--text" outlined  @click="loginUser()">
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      email: "",
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) =>
          value.length >= 6 || "Minimum password length is 6.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    async loginUser() {
      await this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$fire.auth.currentUser.getIdToken().then((idToken) => {
            console.log(idToken);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
