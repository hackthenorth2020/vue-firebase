<template>
  <v-icon :size="size" :color="color" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-icon>
</template>

<script>
export default {
  name: "BaseIcon",

  props: {
    size: {
      type: [Number, String],
      default: 56,
    },
    color: {
      type: [Number, String],
      default: "grey",
    },
  },
};
</script>
