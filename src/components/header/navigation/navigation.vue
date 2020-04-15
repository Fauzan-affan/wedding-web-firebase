<template>
  <div :class="style">
    <div class="flex justify-between pb-6 text-xl">
      <div class="flex">
        <div class="-mt-4">
          <img class="w-16 h-16" src="@/assets/logo.png" alt="">
        </div>
        <div class="hidden md:flex">
          <a href="#Home">
            <nav class="cursor-pointer transition duration-500 ease-in-out pl-8 text-cokelat hover:text-yellow-700">Home</nav>
          </a>
          <a href="#Invitation">
            <nav class="cursor-pointer transition duration-500 ease-in-out pl-8 text-cokelat hover:text-yellow-700">Invitation</nav>
          </a>
        </div>
      </div>
      <div class="md:hidden">
        <button @click="navigation" type="button" class="cursor-pointer transition duration-500 ease-in-out text-cokelat hover:text-yellow-700 focus:text-yellow-700 focus:outline-none">
          <svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <hr class="md:hidden">
    <div :class="isOpen ? '' : 'hidden'" class="py-3 text-center">
      <a href="#Home" class="block rounded text-cokelat py-3 pl-3 hover:text-yellow-700 hover:bg-gray-100">Home</a>
      <a href="#Invitation" class="block rounded text-cokelat py-3 pl-3 hover:text-yellow-700 hover:bg-gray-100">Invitation</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data(){
    return {
      style: "transition duration-500 ease-in-out fixed w-full pt-8 px-5 md:px-12 bg-white shadow md:bg-transparent md:shadow-none",
      isOpen: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.style = "transition duration-500 ease-in-out fixed w-full pt-8 px-5 md:px-12 bg-white shadow"
      } else {
        this.style = "transition duration-500 ease-in-out fixed w-full pt-8 px-5 md:px-12 bg-white shadow md:bg-transparent md:shadow-none"
      }
    },
    navigation() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.style = "transition duration-500 ease-in-out fixed w-full pt-8 px-5 md:px-12 bg-white shadow"
      }
    }
  }
}
</script>

<style>

</style>