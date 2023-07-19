<template>
    <Carousel :perPageCustom="breakpoints2" v-bind="settings" :transition="500" 
        class="w-full h-full max-h-max sm:my-0 md:py-5">
        <Slide v-for="slide in carouselItem" :key="slide.title" class="container h-96 sm:px-5 md:px-24 z-50">
            <div
                class="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow ">
                <fieldset href="#">
                    <img class="p-8 rounded-t-lg" :src="slide.image" alt="product image" />
                </fieldset>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ slide.title }}</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 " aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span
                            class="bg-primary text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 ">$599</span>
                        <a href="#"
                            class="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add
                            to cart</a>
                    </div>
                </div>
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
    name: 'ProductLaris',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            carouselItem: [
                {
                    title: 'Fashion 1',
                    'subtitle': 'Fashion Terbaik',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-1.jpg',
                },
                {
                    title: 'Fashion 2',
                    'subtitle': 'Promo Diskon Akhir bulan',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-2.jpg',
                },
                {
                    title: 'Fashion 3',
                    'subtitle': 'Tersedia Fashion Muslim',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-5.jpg',
                },
                {
                    title: 'Fashion 3',
                    'subtitle': 'Fashion Terbaik',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-1.jpg',
                },
                {
                    title: 'Fashion 4',
                    'subtitle': 'Promo Diskon Akhir bulan',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-2.jpg',
                },
                {
                    title: 'Fashion 5',
                    'subtitle': 'Tersedia Fashion Muslim',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-5.jpg',
                },
                {
                    title: 'Fashion 6',
                    'subtitle': 'Fashion Terbaik',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-4.jpg',
                },
                {
                    title: 'Fashion 7',
                    'subtitle': 'Promo Diskon Akhir bulan',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-5.jpg',
                },
                {
                    title: 'Fashion 8',
                    'subtitle': 'Tersedia Fashion Muslim',
                    text: `Lorem ipsum
                        dolor
                        sit amet
                        consectetur adipisicing elit. Suscipit animi molestias odit maxime porro dolore fuga inventore
                        temporibus fugit.
                        At doloremque quod excepturi aspernatur omnis beatae illo reiciendis aliquid molestias debitis, quidem
                        magnam
                        rem, impedit, error optio quibusdam accusantium officiis.`,
                    image: 'img/product/product-3.jpg',
                },
            ],
            // carousel settings
            settings: {
                itemsToShow: 5,
                snapAlign: 'center',
                wrapAround: true,
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints2: {
                // 700px and up
                700: {
                    itemsToShow: 4,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 6,
                    snapAlign: 'start',
                },
            }
        }
    }
})
</script>
<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
    overflow: auto;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.6;
    transform: rotateY(-20deg) scale(0.9);
}
.carousel__slide img{
    position: relative;
}
.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale();
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.2);
    z-index: 999;
}
</style>