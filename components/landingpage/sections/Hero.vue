<template>
  <section id="hero">

    <base-heading class="black--text"  title="mntr.tech" />
    <v-img 
      :min-height="minHeight"
      src='https://i.pinimg.com/originals/37/b8/11/37b8112791f2529ffe4882412b541c94.gif'
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
        
        
      
          <base-body>
            Ever wanted to take your skills to the next level? mntr empowers young professionals 
            through collaborative peer mentorship
          </base-body>

          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-column align-start'
                : 'align-center'
            "
            class="d-flex flex-wrap"
          >
          <br><br>
            <v-btn to="/SignIn" large color="blue" icon="mdi-login" elevation="3">Sign In</v-btn>
            <v-divider></v-divider>
            

            

<v-btn to="/signup" large color="green" icon="mdi-logout" class="pa-1" height="auto">Sign Up Today!</v-btn>
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
<style>

</style>
