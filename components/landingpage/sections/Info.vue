<template>
  <v-theme-provider dark>
    <base-section id="info-alt" class="grey darken-4">
      <v-responsive class="mx-auto" max-width="1400">
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="3">
              <base-info />
            </v-col>

            <v-col cols="12" md="3">
              <base-info-card title="Contact" />

              <base-business-contact dense />
            </v-col>

            <v-col cols="12" md="3">
              <info-features />
            </v-col>

            <v-col cols="12" md="3">
              <instagram />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
import InfoFeatuers from "@/components/landingpage/InfoFeatures";
import Instagram from "@/components/landingpage/Instagram";
import BaseSection from "@/components/landingpage/base/Section";
import BaseBusinessContact from "@/components/landingpage/base/BusinessContact";
import BaseInfo from "@/components/landingpage/base/Info";
import BaseInfoCard from "@/components/landingpage/base/InfoCard";

export default {
  name: "SectionBusinessInfo",

  components: {
    InfoFeatuers,
    Instagram,
    BaseSection,
    BaseBusinessContact,
    BaseInfo,
    BaseInfoCard,
  },
};
</script>

<style lang="sass">
#info-alt a
  text-decoration: none
</style>
