<template>
    <div id="Kondangan" class="LiveStreaming flex justify-center mb-20">
        <div class="h-full w-full md:w-1/2 shadow-xl rounded-lg -m-40 mb-10 bg-white p-10">
            <div class="uppercase font-bold text-3xl md:text-6xl text-cokelat text-center">Kondangan</div>
            <div class="text-xl md:text-2xl text-center text-cokelat pt-10">
                Can't attend this wedding? Not problem at all. Leave the envelopes kondangan with OVO payment is super easy!
            </div>
            <div class="py-10">
                <label class="block uppercase tracking-wide text-cokelat text-xs md:text-xl font-bold mb-2 text-center" for="copyMe">
                    OVO Number:
                </label>
                <div class="rounded flex justify-center">                    
                    <input class="py-3 text-center bg-gray-200 rounded w-40" type="text" value="081311699123" id="copyMe" readonly>
                    <button class="ml-1 block bg-yellow-500 hover:bg-yellow-600 text-gray-800 text-sm font-semibold uppercase rounded cursor-pointer px-6 py-3" @click="copyMeOnClipboard">Copy</button>
                </div>
                <p class="showOVO text-center mt-2 text-cokelat"></p>
            </div>

            <!-- Accordion -->
            <div class="accordion flex flex-col items-center justify-center pb-10 cursor-pointer">
                <label class="block uppercase tracking-wide text-cokelat text-xs md:text-xl font-bold mb-2 md:text-center" for="copyMe">
                    OVO Transfer tutorial:
                </label>
                <!--  Panel 1  -->
                <div class="w-full md:px-10">
                    <input type="checkbox" name="panel" id="panel-1" class="hidden">
                    <label for="panel-1" class="block text-white p-4 shadow rounded-lg flex justify-between bg-yellow-500 hover:bg-yellow-600" @click="handleInfo">
                        <div class="text-cokelat uppercase font-semibold">Click to View</div>
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path v-if="!info" class="heroicon-ui text-cokelat" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/>
                            <path v-if="info" class="heroicon-ui text-cokelat" d="M8.7 14.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 11.42l-3.3 3.3z"/>
                        </svg>
                    </label>
                    <div class="accordion__content overflow-hidden bg-gray-200">                        
                        <div class="text-sm md:text-lg p-5">
                            <div class="header pb-1">
                                Step by step transfer from OVO to OVO:
                            </div>
                            <p class="py-1">1. Open OVO application</p>
                            <p class="py-1">2. Click Transfer menu on the front page</p>
                            <p class="py-1">3. Enter the nominal you wish to transfer, the minimum is IDR 50,000</p>
                            <p class="py-1">4. Choose transfer between OVOs</p>
                            <p class="py-1">5. Enter the OVO number of the transfer destination, paste OVO above here</p>
                            <p class="py-1">6. Fill in the transfer form properly</p>
                            <p class="py-1">7. Click Transfer</p>
                            <p class="py-1">8. Check the information displayed if it is appropriate, then click Confirm</p>
                            <p class="py-1">9. Enter the security code of your OVO account</p>
                            <p class="py-1">10. A notification will appear on the screen if the transfer is successful</p>
                        </div>
                        <div class="text-sm md:text-lg text-cokelat px-5 pb-5">
                            <nav style="py-1">
                                ** Make sure your OVO upgraded to premium
                            </nav>
                            <nav style="py-1">
                                ** Make sure you copied OVO number first
                            </nav>
                            <nav style="py-1">
                                ** If transfer successful, confirm your OVO transfer by filling out the form below
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-center">
                <!-- form -->
                <form action="#" class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-cokelat text-xs font-bold mb-2" for="name">
                                Name
                            </label>
                            <input class="appearance-none block w-full bg-white text-cokelat border hover:border-yellow-600 focus:border-yellow-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-yellow-200" id="name" type="text" placeholder="Fauzan" required>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-cokelat text-xs font-bold mb-2" for="phone">
                                Phone
                            </label>
                            <input class="appearance-none block w-full bg-white text-cokelat border hover:border-yellow-600 focus:border-yellow-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-yellow-200" id="phone" type="text" placeholder="0812xxxxxxxx" required>
                            <p class="text-gray-600 text-xs italic">Make sure your phone number is correct</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-cokelat text-xs font-bold mb-2" for="address">
                            Address
                        </label>
                        <textarea id="address" rows="5" name="message" class="block w-full rounded mb-2 p-4 text-cokelat border hover:border-yellow-600 focus:border-yellow-600 rounded leading-tight focus:outline-none focus:bg-yellow-200" placeholder="Enter your address here..." required></textarea>
                        <p class="text-gray-600 text-xs italic">Souvenirs will be sent to your address.</p>
                        </div>
                    </div>

                    <div class="flex justify-end w-full">
                        <input type="submit" value="Submit" class="block bg-yellow-500 hover:bg-yellow-600 text-gray-800 text-sm font-semibold uppercase rounded cursor-pointer px-6 py-3">
                    </div>
                </form>                
            </div>
        </div>
        <div class="h-mid"></div>
    </div>
</template>

<script>
export default {
    name: "Kondangan",
    data() {
        return {
            info: false
        }
    },
    methods: {
        copyMeOnClipboard() {
            
            const copyText = document.querySelector("#copyMe");
            const showText = document.querySelector(".showOVO");

            copyText.select();
            copyText.setSelectionRange(0, 99999); //for mobile phone
            
            document.execCommand("copy");

            showText.innerHTML = `${copyText.value} is copied`    
            setTimeout(() => {
                showText.innerHTML = ''    
            }, 2000)
        },
        handleInfo() {
            this.info = !this.info
        }
    }
}
</script>

<style>

</style>