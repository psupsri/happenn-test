<template>
  <v-app light>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  created () {
    localStorage.clear()
  }
}
</script>
