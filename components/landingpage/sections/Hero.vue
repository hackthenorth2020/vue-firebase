<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/hero-2.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="CALL TO ACTION" />

          <base-body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            tempora odio neque. Magni suscipit nam, maiores incidunt cumque ad.
            Similique quia eligendi consectetur fugiat labore veritatis nobis
            quisquam! Nulla, velit.
          </base-body>

          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-column align-start'
                : 'align-center'
            "
            class="d-flex flex-wrap"
          >
            <v-btn to="/SignIn" large color="blue" icon="mdi-login"
              >Login</v-btn
            >

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <v-btn
              to="/signup"
              large
              color="green"
              icon="mdi-logout"
              class="pa-1"
              height="auto"
              >Logout</v-btn
            >
            <!--<:ripple="false" class="pa-1" height="auto" text>
              Get Started Now
            </base-btn>
            --->
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
import BaseHeading from "../base/Heading";
import BaseBtn from "../base/Btn";
import BaseBody from "../base/Body";

export default {
  name: "SectionHero",
  components: {
    BaseHeading,
    BaseBtn,
    BaseBody,
  },
  provide: {
    theme: { isDark: true },
  },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },
};
</script>
