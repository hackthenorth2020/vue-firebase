<template>
  <base-section id="app-features">
    <base-section-heading title="Features:">
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="6">
          <base-avatar-card v-bind="feature" align="left" horizontal>
          </base-avatar-card>
        </v-col>
      
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
import BaseSection from "../base/Section";
import BaseSectionHeading from "../base/SectionHeading";
import BaseAvatarCard from "../base/AvatarCard";

export default {
  name: "SectionAppFeatures",
  components: {
    BaseSection,
    BaseSectionHeading,
    BaseAvatarCard,
  },
  data: () => ({
    features: [
      {
        title: "Indivually Catered ",
        icon:"fas-fa-people-arrows",
        desc: "text"
      },
      {
        title: "Retina Ready",
        icon: "mdi-cellphone",
      },
      {
        selected: true,
        color: "primary",
        dark: true,
        title: "Easily Customizable",
        icon: "mdi-pencil-box-outline",
      },
      {
        title: "Image Parallax",
        icon: "mdi-image-size-select-actual",
      },
      {
        title: "Seo Optimized",
        icon: "mdi-ice-pop",
      },
      {
        title: "24/7 Support",
        icon: "mdi-help-circle-outline",
      },
    ],
  }),
};
</script>
