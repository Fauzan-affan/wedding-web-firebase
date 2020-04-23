<template>
    <div id="LiveStreaming" class="LiveStreaming h-screen flex justify-center p-5 bg-yellow-800">
        <div class="py-10">
            <div class="uppercase font-bold text-3xl md:text-6xl text-white text-center">Live Streaming</div>
            <div class="text-xl md:text-2xl text-center text-white py-5">
                Streaming to view the marriage process online
            </div>
            <div class="flex justify-center items-center">
                <iframe class="w-auto md:min-w-full" width="560" height="315" src="https://www.youtube.com/embed/nwOnhnX5dAQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LiveStreaming"
}
</script>

<style>

</style>