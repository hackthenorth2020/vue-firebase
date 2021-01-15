<template>
  <base-info-card title="Instagram">
    <v-row dense>
      <v-col v-for="n in 6" :key="n" cols="auto">
        <base-img
          :src="require(`@/assets/instagram/insta-${n}.jpg`)"
          color="grey lighten-1"
          width="96"
          tile
        />
      </v-col>
    </v-row>
  </base-info-card>
</template>

<script>
import BaseInfoCard from "@/components/landingpage/base/InfoCard";
import BaseImg from "@/components/landingpage/base/Img";

export default {
  name: "Instagram",
  components: {
    BaseInfoCard,
    BaseImg,
  },
};
</script>
