<template>
  <div>
    <v-bt>Get all items</v-bt>
    <v-card class="counter">
      {{ itemCounter }}
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Items",
  computed: {
    itemCounter() {
      return this.$store.getters.getItems;
    },
    methods: {
      updateItem() {
        return this.$store.dispatch.updateItem;
      },
    },
  },
};
</script>
<style lang></style>
