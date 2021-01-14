<template>
  <v-container class="ma-6">
    <v-card class="pa-6">
      <v-card-title class="justify-center">
        <h5>Sign Up</h5>
      </v-card-title>
      <v-form>
        <v-text-field
          v-model="email"
          label="Email"
          placeholder="example@example.com"
          :rules="[rules.required, rules.email]"
        />
        <v-text-field
          v-model="password"
          label="Password"
          placeholder="Your Password"
          :rules="[rules.required, rules.counter]"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        />
        <v-text-field
          v-model="passwordConfirm"
          label="Confirm Password"
          placeholder="Confirm Password"
          :rules="[rules.required, rules.counter, rules.passwordMatch]"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        />
        <v-btn :disabled="!validInfo()" @click="signUpUser()" large block>
          Sign Up
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
      passwordConfirm: "",
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) =>
          value.length >= 6 || "Minimum password length is 6.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        passwordMatch: (value) =>
          this.password === this.passwordConfirm || "Passwords do not match",
      },
    };
  },
  methods: {
    validInfo() {
      return (
        this.email != "" &&
        this.password === this.passwordConfirm &&
        this.password.length >= 6
      );
    },
    async signUpUser() {
      await this.$fire.auth
        .createUserWithEmailAndPassword(this.email, this.password)
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
