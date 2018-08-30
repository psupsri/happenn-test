<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h3 class="display-3">TODO LIST</h3>
        <v-text-field
          solo
          label="Write something?"
          v-on:keyup.13="submit"
          v-model="input"
        ></v-text-field>
        <v-list subheader two-line class="elevation-3">
          <template v-for="(item, index) in tasks">
            <v-divider :key="`divider-` + index"></v-divider>
            <v-list-tile
              :key="`tile-` + index"
              :to="`task/${index}`"
              :class="{'bg-green': item.status === 'complete'}"
            >
              <v-list-tile-content>
                <v-list-tile-title
                  :class="{'grey--text font-italic complete': item.status === true}"
                  v-html="item.title">
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-divider></v-divider>
          <v-list-tile style="height: 32px">
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    input: '',
    tasks: []
  }),
  created () {
    if (!localStorage.tasks) return
    this.tasks = JSON.parse(localStorage.getItem('tasks'))
  },
  methods: {
    submit () {
      if (this.input === '') return
      let task = {
        title: this.input,
        status: 'active'
      }
      this.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      this.$store.dispatch('savetask', task)
      this.input = ''
    }
  }
}
</script>

<style scope>
.bg-green {
  background-color: limegreen;
}
</style>
