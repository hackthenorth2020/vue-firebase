<template>
  <div>
    <v-btn @click="getItems">Get all items</v-btn>
    <v-flex v-for="item in getAllItems" :key="item.id">
      <v-card class="ma-4"> {{ item.name }} : {{ item.id }} </v-card>
    </v-flex>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Items",
  computed: {
    ...mapGetters(["getAllItems"]),
  },
  methods: {
    ...mapActions(["getItems"]),
  },
};
</script>
<style lang></style>
