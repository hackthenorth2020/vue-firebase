<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
       src="https://miro.medium.com/max/2756/1*L30BHpyUmdluxpzanwujiw.png"
        contain
        max-width="128"
        min-height="78"
        width="100%"
      />

      <base-title size="body-5" space="4" title="Mntr" weight="bold" />

      <base-body>
      Learn, Collaborate, Mntr.
      </base-body>

      <base-btn class="mb-12" color="white" outlined> More Info </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
import BaseBtn from "@/components/landingpage/base/Btn";
import BaseBody from "@/components/landingpage/base/Body";
import BaseTitle from "@/components/landingpage/base/Title";
import BaseImg from "@/components/landingpage/base/Img";

export default {
  name: "BaseInfo",
  components: {
    BaseBtn,
    BaseBody,
    BaseTitle,
    BaseImg,
  },
  props: {
    title: String,
    dark: Boolean,
  },

  data: () => ({
    business: [
      {
        icon: "mdi-map-marker-outline",
        title: "Address",
        text: "8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137",
      },
      {
        icon: "mdi-cellphone",
        title: "Phone",
        text: "01 (800) 433 744<br>01 (800) 433 633",
      },
      {
        icon: "mdi-email",
        title: "Email",
        text: "john@vuetifyjs.com<br>heather@vuetifyjs.com",
      },
    ],
  }),
};
</script>
