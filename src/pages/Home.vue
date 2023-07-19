<template>
    <!-- Banner -->
    <section class="container  mx-auto">
        <CarouselHeader />
    </section>
    <!-- End Banner -->
    <hr class="w-full h-3 bg-primary block">

    <!-- Section Katalog -->
    <katalog />
    <!-- End Katalog -->

    <!-- New Product -->
    <section class="container mx-auto sm:my-5 md:my-10">
        <h1 class="text-base sm:text-lg md:text-2xl lg:text-3xl">Produk Terbaru</h1>
        <CarouselNewProduct />
    </section>
    <section class="container mx-auto sm:my-5 md:my-10">
        <h1 class="text-base sm:text-lg md:text-2xl lg:text-3xl">Produk Terlaris</h1>
        <CarouselTerlaris />
    </section>
</template>

<script >
import Katalog from './../components/Katalog.vue';
import CarouselHeader from './../components/CarouselHeader.vue';
import CarouselNewProduct from './../components/CarouselNewProduct.vue';
import CarouselTerlaris from './../components/CarouselTerlaris.vue';
export default {
  components: {
    Katalog,
    CarouselHeader,
    CarouselNewProduct,
    CarouselTerlaris,
  },
}
</script>