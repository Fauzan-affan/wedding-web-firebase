<template>
  <div class="home min-h-screen">
    <Header id="Home" />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header/Header.vue'
import Body from '../components/body/Body.vue'
import Footer from '../components/footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>
