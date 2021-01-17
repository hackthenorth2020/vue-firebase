<template>
  <v-container>
    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4">
          <h1>Matched Mentees</h1>
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
              @click="loading(item.id), setMentee(item.id)"
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
        name: "Henry Trebble",
        bio: "Highly motivated second year computer science student.",
        src:
          "https://i1.wp.com/eoschools.org/wp-content/uploads/2018/11/AdobeStock_164484931_400x438-Bruno.jpg?resize=356%2C390",
        id: 87,
      },
      {
        name: "Shannon Sharp",
        bio:
          "New grad in political science, looking for career and life guidance!",
        src:
          "https://static9.depositphotos.com/1017986/1115/i/600/depositphotos_11159069-stock-photo-happy-and-smiling-teenage-girl.jpg",
        id: 23,
      },
      {
        name: "Jessica Chen",
        bio: "First year economic student looking for leadership advice.",
        src:
          "https://freedesignfile.com/upload/2017/11/Young-female-college-student-Stock-Photo.jpg",
        id: 5321,
      },
      {
        name: "Justin Tab",
        bio: "Young IT professional looking to find technical guidance.",
        src:
          "https://brocku.ca/brock-news/wp-content/uploads/2018/03/Ishan-Patel-1600x1066.jpg?x70330",
        id: 212,
      },
      {
        name: "Stacy Loap",
        bio:
          "Third year media design student looking for career and personal advice.",
        src:
          "https://i.pinimg.com/originals/df/10/f8/df10f827ca7e1a2eee027b1c0998475f.jpg",
        id: 567,
      },
      {
        name: "David Blaire",
        bio:
          "Senior in high school, looking to attend YorkU for Computer Science.",
        src:
          "https://images.pexels.com/photos/2826131/pexels-photo-2826131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        id: 123,
      },
    ],
  }),
  methods: {
    loading(id) {
      this.index = id;
    },
    async setMentee(id) {
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
