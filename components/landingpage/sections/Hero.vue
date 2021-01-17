<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      src="https://miro.medium.com/max/2756/1*L30BHpyUmdluxpzanwujiw.png"
      class="white--text"
      gradient="to right, rgba(43, 11, 101, .8), rgba(5, 110, 111, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="mntr" />

          <base-body>
          Redefining mentorship through an inclusive peer-to-peer collaborative platform
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
              >Sign In</v-btn
            >

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <v-btn
              to="/signup"
              large
              color="green"
              icon="mdi-logout"
              class="pa-1"
              height="auto"
              >Sign Out</v-btn
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
