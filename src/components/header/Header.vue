<template>
  <div class="bg-center bg-cover min-h-screen bg-fixed" :style="{backgroundImage: `url('${image}')`}">
    <Navigation />
    <Description />
  </div>
</template>

<script>
import Navigation from './navigation/navigation.vue'
import Description from './description/description.vue'

export default {
  name: 'Header',
  components: {
    Navigation,
    Description
  },
  data(){
    return {
      image: require("../../assets/cover.jpeg")
    }
  }
}
</script>

<style>

</style>