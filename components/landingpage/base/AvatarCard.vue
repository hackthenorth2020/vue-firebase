<template>
  <div :class="classes" class="pt-2">
    <base-avatar
      v-if="icon"
      :color="color"
      :dark="dark"
      :icon="icon"
      :outlined="outlined"
      :size="size"
      :selected="selected"
      class="mb-3"
    />

    <div :class="horizontal && title && 'ml-6'">
      <base-title :title="title" class="text-uppercase" space="3" />

      <base-body
        v-if="text || $slots.default"
        :space="horizontal ? 0 : undefined"
        :text="text"
        class="mx-auto"
        max-width="700"
      >
        <slot />
      </base-body>
    </div>
  </div>
</template>

<script>
// Mixins
import Heading from "@/mixins/headings";
import BaseTitle from "./Title";
import BaseBody from "./Body";
import BaseAvatar from "./Avatar";

export default {
  name: "BaseAvatarCard",
  components: {
    BaseTitle,
    BaseBody,
    BaseAvatar,
  },

  mixins: [Heading],

  props: {
    align: {
      type: String,
      default: "left",
    },
    color: String,
    dark: Boolean,
    horizontal: Boolean,
    icon: String,
    desc: String,
    outlined: {
      type: Boolean,
      default: true,
    },
    space: {
      type: [Number, String],
      default: 8,
    },
    size: {
      type: [Number, String],
      default: 72,
    },
    text: String,
    title: String,
    selected: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      const classes = [`mb-${this.space}`];

      if (this.horizontal) {
        classes.push("d-flex");

        if (!this.$slots.default && !this.text) {
          classes.push("align-center");
        }
      }

      return classes;
    },
  },
};
</script>
