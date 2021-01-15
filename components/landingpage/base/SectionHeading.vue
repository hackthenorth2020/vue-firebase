<template>
  <div :class="classes" class="base-section-heading">
    <base-avatar
      v-if="icon"
      :icon="icon"
      :outlined="outlined"
      class="mb-4"
      color="primary"
      dark
    />

    <base-subtitle v-if="subtitle" :title="subtitle" space="1" tag="h2" />

    <base-subheading
      v-if="title"
      :align="align"
      :title="title"
      class="text-uppercase"
      space="2"
    />

    <base-divider :color="color" />

    <base-body v-if="$slots.default || text" class="mx-auto" max-width="700">
      <slot v-if="$slots.default" />

      <template v-else>
        {{ text }}
      </template>
    </base-body>
  </div>
</template>

<script>
// Mixins
import Heading from "@/mixins/headings";
import BaseBody from "./Body";
import BaseDivider from "./Divider";
import BaseSubheading from "./Subheading";
import BaseSubtitle from "./Subtitle";
import BaseAvatar from "./Avatar";

export default {
  name: "BaseSectionHeading",
  components: {
    BaseBody,
    BaseDivider,
    BaseSubheading,
    BaseSubtitle,
    BaseAvatar,
  },
  mixins: [Heading],

  props: {
    align: {
      type: String,
      default: "center",
    },
    color: {
      type: String,
      default: "primary",
    },
    icon: String,
    outlined: Boolean,
    space: {
      type: [Number, String],
      default: 12,
    },
    subtitle: String,
    text: String,
    title: String,
  },

  computed: {
    classes() {
      return [`text-${this.align}`, `mb-${this.space}`];
    },
  },
};
</script>
