<template>
  <div id="app">
      <div class="home min-h-screen">
        <Header id="Home" />
        <Body />
        <Footer />
      </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Body from './components/body/Body.vue'
import Footer from './components/footer/Footer.vue'

export default {
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style src="./css/main.css"/>
