<template>
    <div id="LiveStreaming" class="LiveStreaming h-senior md:h-streaming pt-10 bg-cokelat">
        <div class="title">
            <div class="uppercase font-bold text-3xl md:text-6xl text-yellow-500 text-center">Live Streaming</div>
        </div>
        <div class="block md:flex md:justify-center md:mx-10">
            <div class="LiveStreaming px-10 pt-10 md:w-1/2">
                <div class="text-xl text-center text-white py-5">
                    Streaming below to view the marriage process online
                </div>
                <div class="flex justify-center items-center hover:shadow-2xl">
                    <iframe class="rounded-lg w-auto md:min-w-full" width="560" height="315" src="https://www.youtube.com/embed/nwOnhnX5dAQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="Comment px-10 pt-10 md:w-1/2">
                <div class="text-xl text-center text-white py-5">
                    Comments below to show your support for the bride and groom 👰🤵
                </div>
                <div class="flex flex-1 overflow-hidden h-comment rounded-lg">
                    <div class="overflow-auto flex-1 p-2">
                        <!-- <div v-for="i in 50" :key="i">Ah</div> -->
                        <vue-disqus shortname="Zaki" url="http://localhost:8080/"></vue-disqus>
                    </div>
                </div>
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