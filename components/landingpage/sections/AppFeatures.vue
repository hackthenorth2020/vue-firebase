<template>
  <base-section id="app-features">
    <base-section-heading title="Features">
    We've implemented optimal Mentee-Mentor pairing to find both fellow mentees and 
    relevant mentors
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
        
        selected: true,
        color: "primary",
        dark: true,
        title: "Peer To Peer",
        icon: "mdi-handshake",
        text: "Integrate Peer to Peer mentoring where mentee can meet other mentees with similar interests"
      },
      {
        
        selected: true,
        color: "primary",
        dark: true,
        title: "Mentor Matching",
        icon: "mdi-human-queue",
        text:"Mentees can filter through relevant suggested mentors to find their optimal mentor"
      },
      {
        selected: true,
        color: "primary",
        dark: true,
        title: "Statistics",
        icon: "mdi-monitor-dashboard",
        text: "Mentors can get detailed feedback on the number of mentees"
      },

      {
        
        selected: true,
        color: "primary",
        dark: true,
        title: "Collaborative Mentorship",
        icon: "mdi-human-greeting",
        text: "Mentees get the chance to mentor one another in group based projects facilitated by a mentor"
      },
    /*
      {
        title: "Seo Optimized",
        icon: "mdi-ice-pop",
        text:
      },
      {
        title: "24/7 Support",
        icon: "mdi-help-circle-outline",
        text:
      },
      */
    ],
  }),
};
</script>
