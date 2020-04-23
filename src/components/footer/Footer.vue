<template>
  <div class="relative bg-cokelat h-20">
    <div class="flex justify-center items-center min-h-full text-white">
      <p class="mr-1">Powered by </p>
      <nav class="text-yellow-800 hover:text-yellow-700 cursor-pointer" @click="handleLink">Fauzan@hacktiv8.com</nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    handleLink() {
      window.open("https://www.linkedin.com/in/fauzan-affan-zaki/", "_blank")
    }
  }
}
</script>

<style>

</style>