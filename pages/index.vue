<template>
  <section :id="id">
    <v-row no-gutters>
      <v-col cols="12">
        <component
          :is="`section-${section}`"
          v-for="section in sections"
          :key="section"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import LoadSections from "@/mixins/load-sections";

export default {
  name: "LandingPage",

  metaInfo: { title: "LandingPage" },

  //   extends: View,

  mixins: [LoadSections(["hero", "app-features", "info"])],

  props: {
    id: {
      type: String,
      default: "landingpage",
    },
  },
};
</script>
