<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-switch
            v-model="$vuetify.theme.dark"
            label="Dark Mode"
            class="pl-4"
          ></v-switch>
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-img
        @click="goHome()"
        :src="require('@/assets/logo.png')"
        contain
        width="110px"
        height="110px"
      />
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>
      <div class="flex-grow-1"></div>

      <v-btn class="ml-2" min-width="0" text to="/userprofile">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn class="ml-2" min-width="0" text to="/dashboard">
        <v-icon>mdi-tablet-dashboard</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-spacer />
    <!-- {{ this.$fire.currentUser }} -->
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-account",
          title: "Sign in",
          to: "/signin",
        },
        {
          icon: "mdi-account",
          title: "Sign up",
          to: "/signup",
        },
        {
          icon: "mdi-account",
          title: "Temp Account",
          to: "/temp",
        },
        {
          icon: "mdi-account",
          title: "About",
          to: "/about",
        },
        {
          icon: "mdi-account",
          title: "Items",
          to: "/items",
        },
        {
          icon: "mdi-account",
          title: "User Profile",
          to: "/userprofile",
        },
        {
          icon: "mdi-account",
          title: "Find Mentor",
          to: "/findmentor",
        },
        {
          icon: "mdi-account",
          title: "Find Mentee",
          to: "/findmentee",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Mntr",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
