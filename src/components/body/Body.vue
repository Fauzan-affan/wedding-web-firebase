<template>
  <div>
    <Invitation />
    <LiveStreaming />
    <Kondangan />
  </div>
</template>

<script>
import Invitation from "./invitation/Invitation.vue"
import LiveStreaming from "./streaming/LiveStreaming.vue"
import Kondangan from "./kodangan/Kondangan.vue"

export default {
  name: "Body",
  components: {
    Invitation,
    LiveStreaming,
    Kondangan
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>