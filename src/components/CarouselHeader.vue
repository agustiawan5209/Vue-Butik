<template>
    <Carousel id="carouselheader" :perPageCustom="breakpoints" v-bind="settings" :wrapAround="true" :transition="500"
        :autoplay="5000" class="w-full h-max sm:my-0 md:my-10">
        <Slide v-for="slide in carouselItem" :key="slide.id" class="container sm:px-5 md:px-10 ">
            <div class="grid grid-cols-12 justify-items-center relative">
                <div class="absolute md:hidden w-full h-full top-0 bg-gray-800 opacity-30"></div>

                <div class="absolute md:relative top-10 sm:top-0   md:col-span-5 md:flex flex-col px-0 sm:px-5 md:px-10">
                    <h1 class="text-2xl lg:text-5xl text-start font-bold text-white drop-shadow-lg md:text-gray-800">{{
                        slide.title }}</h1>
                    <h2 class="text-sm md:text-xl text-start font-semibold text-green-600 ">{{ slide.subtitle }}
                    </h2>
                    <p
                        class="hidden sm:block sm:text-base md:text-xs lg:text-base text-white md:text-gray-800 text-start shadow-white">
                        {{ slide.text }}</p>
                    <button type="button"
                        class="px-2 py-2 bg-primary w-40 text-white drop-shadow-md rounded-lg font-bold">Shop</button>
                </div>
                <img class=" col-span-12 md:col-span-7 w-full" :src="slide.image" :alt="'katalog ' + slide" />
            </div>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Header',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            carouselItem: [
                {
                    id: 'header1',
                    title: 'Temukan Gaya Terbaru Anda di Butik Kami!',
                    'subtitle': 'Fashion Terbaik',
                    text: `Inilah dress yang sempurna untuk momen istimewa Anda. Dibuat dengan bahan berkualitas tinggi dan desain yang elegan, dress kami memberikan sentuhan keanggunan pada setiap langkah Anda`,
                    image: 'img/product/product-1.jpg',
                },
                {
                    id: 'header2',
                    title: 'Dapatkan Pakaian Stylish dan Eksklusif di Butik Favorit Anda!',
                    'subtitle': 'Promo Diskon Akhir bulan',
                    text: `Kami bangga mempersembahkan koleksi pakaian berkualitas tinggi yang didesain secara eksklusif. Setiap item dalam koleksi kami adalah kombinasi sempurna antara gaya tren terkini dan kenyamanan`,
                    image: 'img/product/product-2.jpg',
                },
                {
                    id: 'header3',
                    title: 'Butik Fashion Terkini dengan Pilihan Unik untuk Penampilan Anda!',
                    'subtitle': 'Tersedia Fashion Muslim',
                    text: `Ciptakan tampilan yang modis dan menawan dengan pilihan pakaian terbaik dari butik kami. Dengan berbagai macam gaya dan ukuran, kami menjamin Anda akan menemukan pakaian yang sesuai dengan kepribadian dan selera Anda.`,
                    image: 'img/product/product-5.jpg',
                },
            ],
            // carousel settings
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 5,
                    snapAlign: 'start',
                },
            }
        }}
    })
</script>
  