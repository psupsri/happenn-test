<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card v-if="task">
          <v-card-title :class="{'bg-green': task.status === 'complete'}">
            <h1>{{ task.title }}</h1>
          </v-card-title>
          <v-card-actions>
            <v-btn @click="onComplete" color="success" v-if="task.status === 'active'">Done</v-btn>
            <v-btn @click="onComplete" color="info" v-else>Active</v-btn>
            <v-btn @click="onDelete" color="error">Delete</v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-else>
          <v-card-title>
            <h1>NO TASK!!!</h1>
          </v-card-title>
        </v-card>
        <v-btn to="/" flat>back home</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    index: null
  }),
  created () {
    this.index = this.$route.params.id
  },
  computed: {
    task () {
      return this.$store.getters.getTask(this.index)
    }
  },
  methods: {
    onComplete () {
      this.$store.dispatch('complete', this.index)
    },
    onDelete () {
      this.$store.dispatch('delete', this.index)
      this.$router.push('/')
    }
  }
}
</script>

<style scope>
.bg-green {
  background-color: limegreen;
}
</style>