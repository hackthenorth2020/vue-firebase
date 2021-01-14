<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card :title="title" color="primary">
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
import BaseInfoCard from "@/components/landingpage/base/InfoCard";
import BaseAvatarCard from "@/components/landingpage/base/AvatarCard";

export default {
  name: "BaseBusinessContact",
  components: {
    BaseInfoCard,
    BaseAvatarCard,
  },
  props: {
    dark: Boolean,
    dense: Boolean,
    title: String,
  },

  data: () => ({
    business: [
      {
        icon: "mdi-map-marker-outline",
        title: "Address",
        text: "4700 Keele St<br>Toronto, ON M3J 1P3",
      },
      {
        icon: "mdi-cellphone",
        title: "Phone",
        text: "1 (800) 888 777<br>1 (800) 888 666",
      },
      {
        icon: "mdi-email",
        title: "Email",
        text: "baseDev@test.com<br>basedDev@test.com",
      },
    ],
  }),
};
</script>
