<template>
  <div :class="classes" class="base-avatar d-inline-flex">
    <v-avatar
      v-if="outlined"
      :color="color || 'grey lighten-3'"
      :size="outlineSize"
      :style="styles"
      class="base-avatar__outline grey"
      style="opacity: 0.4"
    />

    <v-avatar
      :color="color || 'white'"
      :size="size"
      class="base-avatar__avatar"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <base-icon
        v-if="icon"
        :dark="dark"
        :size="size / 2"
        :color="this.selected ? 'white' : 'grey'"
      >
        {{ icon }}
      </base-icon>
    </v-avatar>
  </div>
</template>

<script>
import BaseIcon from "./Icon";

export default {
  name: "BaseAvatar",
  components: {
    BaseIcon,
  },
  props: {
    color: String,
    dark: Boolean,
    icon: String,
    outlined: Boolean,
    size: {
      type: [Number, String],
      default: 56,
    },
    selected: Boolean,
  },

  data: () => ({
    multiply: 6,
  }),

  computed: {
    classes() {
      return [this.outlined && "base-avatar--outlined"];
    },
    outlineSize() {
      return Number(this.size) + this.size / this.multiply;
    },
    styles() {
      const margin = this.size / (this.multiply * 2);

      return {
        // Aligns the outline content with the content
        margin: `-${margin}px 0 0 -${margin}px`,
      };
    },
  },
};
</script>

<style lang="sass">
.base-avatar
  border-radius: 50%
  position: relative
  overflow: visible

  &__outline
    position: absolute !important
    left: 0
    top: 0
    color: #ffffff

  &--outlined
    background-color: "$vuetify.theme.dark ? 'white' : black"

    .base-avatar__avatar
      border: thin solid rgba(0, 0, 0, .12) !important
</style>
