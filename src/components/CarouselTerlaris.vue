<template>
    <Carousel :perPageCustom="breakpoints2" v-bind="settings" :transition="500"
        class="w-full h-full max-h-max sm:my-0 md:py-5">
        <Slide v-for="slide in carouselItem" :key="slide.id" class="container h-96 sm:px-5 md:px-24 z-50">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <fieldset href="#" class="w-full flex justify-center">
                    <img v-if="slide.galleriesdefault !== null" class="p-4 w-2/3 rounded-t-lg" :src="slide.galleriesdefault.photo"
                        :alt="slide.name" />
                    <img v-else class="p-4 w-2/3 rounded-t-lg" :src="'img/katalog/katalog4.jpg'" :alt="slide.name" />
                </fieldset>
                <div class="px-3 pb-2">
                    <a href="#">
                        <h5 class="text-base font-semibold tracking-tight text-gray-900">{{ slide.name }}</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-2">
                        <svg v-for="rating in slide.rating" class="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span class="bg-primary text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{{
                            slide.rating }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-gray-900 ">{{ rupiah(slide.price) }}</span>
                        <a href="#" @click="addToCart(slide.id, slide.price)"
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
import axios from 'axios'
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
            carouselItem: [],
            // carousel settings
            settings: {
                itemsToShow: 4,
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
    },
    mounted() {
        axios.get('//admin-enerel.delapain.com/api/products/laris', {
            params: {
                order_by: 'asc',
                limit: 4,
            }
        }).then((res) => {
            console.log(res.data.data)
            this.carouselItem = res.data.data;
        })
    },
    methods: {
        rupiah(number) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            }).format(number);
        },
        // Add To Cart
        addToCart(productID, priceProduct) {
            if (this.loggedIn == true) {
                axios.get('//admin-enerel.delapain.com/api/user', {
                    headers: { Authorization: 'Bearer ' + this.access_token }
                })
                    .then(res => {
                        // Get Data User
                        const UserData = res.data;

                        // Send Data To Cart Database
                        axios.post('//admin-enerel.delapain.com/api/Cart/store', {
                            user_id: UserData.id,
                            product_id: productID,
                            price: priceProduct,
                            quantity: 1,
                        }).then((res) => {
                            // // Modal Notification
                            Swal.fire({
                                title: res.data.meta.message,
                                confirmButtonText: 'Save',
                            }).then((result) => {
                                /* Read more about isConfirmed, isDenied below */
                                if (result.isConfirmed) {
                                    this.$router.push({ name: 'cart' }).then(() => { this.$router.go() })
                                }
                            })
                        }).catch((err) => {
                            console.log(err)
                        })

                    }).catch(error => console.log(error))


            } else {
                this.$router.push({ name: 'login' })
            }
        },
        addWishlist(productID) {
            if (this.loggedIn) {
                axios.get('//admin-enerel.delapain.com/api/user', {
                    headers: { Authorization: 'Bearer ' + this.access_token }
                })
                    .then(res => {
                        // Get Data User
                        const UserData = res.data;

                        // Send Data To Cart Database
                        axios.post('//admin-enerel.delapain.com/api/Wishlist/store', {
                            user_id: UserData.id,
                            product_id: productID,
                        }).then((res) => {
                            // // Modal Notification
                            Swal.fire({
                                title: res.data.meta.message,
                                confirmButtonText: 'Save',
                            }).then((result) => {
                                /* Read more about isConfirmed, isDenied below */
                                if (result.isConfirmed) {
                                    this.$router.push({ name: 'account.wishlist' }).then(() => { this.$router.go() })
                                }
                            })
                        }).catch((err) => {
                            console.log(err)
                        })

                    }).catch(error => console.log(error))


            } else {
                this.$router.push({ name: 'login' })
            }
        },
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

.carousel__slide img {
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