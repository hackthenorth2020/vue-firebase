<template>
  <base-info-card title="Features">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
import BaseInfoCard from "@/components/landingpage/base/InfoCard";

export default {
  name: "SectionFeaturesAlt",
  components: {
    BaseInfoCard,
  },
  data: () => ({
    features: [
      "Some Cool Ass Feature",
      "Meh Feature",
      "Is This Even A Feature",
      "Repeat Cool Ass Feature",
      "Why Are You Still Reading",
    ],
  }),
};
</script>
