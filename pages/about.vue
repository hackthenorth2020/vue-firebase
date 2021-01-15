:<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md3>
        <v-card
          class="ma-4"
          min-width="256"
          max-width="512"
          v-for="member in team"
          :key="member.id"
        >
          <v-img height="250" :src="member.img"></v-img>

          <v-card-title>{{ member.name }} </v-card-title>
          <v-card-text> Hello </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    team: [
      {
        name: "Allen Kaplan",
        img:
          "https://avatars0.githubusercontent.com/u/25397434?s=460&u=84547a710784c8c42a5a6970ac624a6aeb807a9a&v=4",
      },
      {
        name: "Harp J",
      },
      {
        name: "Aman",
      },
      {
        name: "Emily",
      },
    ],
  }),
};
</script>

<style>
</style>