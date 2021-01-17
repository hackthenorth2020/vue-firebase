<template>
  <v-container>
    <v-card>
      <v-img src="img" />
      <h2>{{ name }}</h2>
      <h3>{{ bio }}</h3>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    name: String,
    bio: String,
    img: String,
  },
};
</script>
