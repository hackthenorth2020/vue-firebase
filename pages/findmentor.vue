<template>
  <v-container>
    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4">
          <h1>Matched Mentors</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-col cols="20">
      <v-row rows="8">
        <v-card
          v-for="item in items"
          :key="item.id"
          class="ma-6 d-flex flex-column"
          width="200px"
          height="400px"
        >
          <v-img :src="item.src" height="200px" width="200px" />
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text>{{ item.bio }}</v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn
              elevation="2"
              :class="'primary'"
              :loading="loading && index == item.id"
              :disabled="loading && index == item.id"
              @click="loading(item.id), setMentor(item.id)"
            >
              Pair
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAllItems"]),
  },
  data: () => ({
    index: -1,
    model: null,
    items: [
      {
        name: "Sarah Close",
        bio: "Looking for a young professional to mentor",
        src:
          "data:image/jpeg;base64,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",
        id: 17,
      },
      {
        name: "Charley Chase",
        bio: "Helping those in need.",
        src:
          "https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg",
        id: 16,
      },
      {
        name: "James Oliver",
        bio: "Here and happy to help!",
        src:
          "https://cdn.britannica.com/20/200220-050-394A5A7C/Jamie-Oliver-2016.jpg",
        id: 15,
      },
      {
        name: "Veronica Large",
        bio: "Here to see the next generation suceed.",
        src:
          "https://thumbs.dreamstime.com/b/young-brunette-woman-smiling-confident-girl-profile-looking-aside-copy-space-young-brunette-woman-smiling-confident-girl-profile-179615887.jpg",
        id: 14,
      },
      {
        name: "Harvey Dent",
        bio: "Looking to do my part by helping you do yours.",
        src:
          "https://media.istockphoto.com/photos/man-portrait-side-view-of-young-blond-guy-in-jean-shirt-looking-on-picture-id1139970314?k=6&m=1139970314&s=612x612&w=0&h=6WlQJEXcL3sd0VenePGcquhLFJI4-wQVnC54R4HMqCw=",
        id: 13,
      },
      {
        name: "Bill Nye",
        bio: "Happy to help any young science enthusiasts.",
        src: "https://thumbs.dreamstime.com/t/profile-14307821.jpg",
        id: 12,
      },
    ],
  }),
  methods: {
    loading(id) {
      this.index = id;
    },
    async setMentor(id) {
      const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

      console.log(id);
      await sleep(1000);
      this.$alert("Successfully Paired", "Success", "success").then(() => {
        this.$router.push("/pairing");
      });
    },
  },
};
</script>
