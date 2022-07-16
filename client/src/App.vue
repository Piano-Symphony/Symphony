<template>
    <TheNavigation />
   <router-view></router-view>

</template>
<script lang="ts">

import TheNavigation from './components/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation
  },
}
</script>

