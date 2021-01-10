<template>
  <div>
    <h1>Signup</h1>
    <v-btn @click="createUser()">Sign up</v-btn>
    <v-btn @click="loginUser()">Login User</v-btn>
    <v-btn @click="getToken()">Print token to console</v-btn>
    <v-btn @click="getSomething()">Send Request </v-btn>
    <br/>
    <v-textarea
          outlined
          disabled
          label="Token"
          v-model=this.token
        />
    <userSignUp/>
    <SignIn />
  </div>
</template>

<script>
/*eslint-disable*/
import firebase from 'firebase'
import { firebaseui } from 'firebaseui'
import SignIn from '../components/SignIn'
import userSignUp from '../components/userSignUp'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    username: '',
    password: '',
    token: '',
  }),
    components: {
      SignIn,
      userSignUp
    },
    methods: {
    ...mapActions(['getSomething']),
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          'foo@foo.foo',
          'test123'
        )
      } catch (e) {
        handleError(e)
      }
    },
    async loginUser(username, password) {
            try {
        await this.$fire.auth.signInWithEmailAndPassword(
          username,
          password
        ).then((user) => {
          console.log(user); 
          // console.log(this.$fire.auth.currentUser.getIdToken)
          // console.log("Current user " + this.$fire.auth.currentUser) 
          })
      } catch (e) {
        console.log(e)
      }  
    },
    getToken() {
      try {
        this.$fire.auth.currentUser.getIdToken().then((idToken) => {console.log(idToken); this.token = idToken})
      } catch (e) {
        console.log(e)
      }
    }

  }
}
</script>

<style></style>
