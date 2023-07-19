<template>
    <section class="w-full mx-auto mt-2">
        <div class="w-full mx-auto flex flex-col md:flex-row justify-between gap-4">
            <div class="relative w-2/3 md:w-1/5 ">
                <div class="absolute w-full h-max bg-primary px-3 py-5">
                    <!-- Kategori -->
                    <div class="w-full py-2">
                        <ul class="list-item space-y-2">
                            <li v-for="list in kategori" class="flex flex-1 inset-0 gap-2 pl-4">
                                <input type="checkbox" :name="list.nama" :id="list.nama">
                                <label :for="list.nama" v-text="list.nama"
                                    class="text-right font-medium capitalize text-white drop-shadow-sm"></label>
                            </li>
                        </ul>
                    </div>
                    <!-- ./Kategori -->

                    <!-- Price -->
                    <div class="w-full flex flex-row justify-center py-2">
                        <div class=" w-32 sm:w-20 md:w-32">
                            <label for="price-high" class="sr-only">price-high</label>
                            <input type="number" name="price-high" id="price-high" class="w-full rounded-md text-center p-1"
                                value="0">
                        </div>
                        <span>-</span>
                        <div class=" w-32 sm:w-20 md:w-32">
                            <label for="price-high" class="sr-only">price-high</label>
                            <input type="number" name="price-high" id="price-high" class="w-full rounded-md text-center p-1"
                                value="0">
                        </div>
                    </div>
                    <!-- ./Price -->
                </div>
            </div>
            <div class="w-4/5 container mx-auto">
                <div class="flex flex-wrap gap-2 ">
                    <div class="w-64 h-max pb-4 bg-transparent overflow-hidden shadow-lg rounded-md border border-gray-200"
                        v-for="item in 10">
                        <!-- Header Card -->
                        <div class="relative w-full group overflow-hidden">
                            <div class="absolute w-full h-full hidden group-hover:flex flex-row gap-2 justify-center items-center z-50 transition-all">
                                <a href="#" class="">
                                    <font-awesome-icon class="rounded-full bg-primary text-white p-1" :icon="['fas', 'eye']" />
                                </a>
                                <a href="#" class="">
                                    <font-awesome-icon class="rounded-full bg-primary text-white p-1" :icon="['fas', 'heart']" />
                                </a>
                            </div>
                            <div class="absolute w-full h-full opacity-30 group-hover:opacity-10 bg-gray-600 transition-opacity"></div>
                            <img class=" rounded-t-lg group-hover:scale-125 transition-transform"
                                :src="'img/product/product-1.jpg'" alt="product image" />
                        </div>
                        <!-- content -->
                        <div class="w-full px-3">
                            <h1 class="font-medium text-sm sm:text-lg md:text-xl">Nama Produk {{ item }} </h1>
                            <dl class="text-left font-normal text-xs sm:text-sm text-gray-500">
                                <dt class="text">Deskripsi Singkat</dt>
                                <dd>stok</dd>
                            </dl>
                        </div>
                        <!-- Footer -->
                        <div class="flex flex-row items-center gap-1 px-4 ">
                            <h2 class="text-lg text-error">Rp. 100.000</h2>
                            <span class="text-sm text-error underline">5%</span>
                        </div>
                        <div class="flex justify-center items-center mt-2 px-2">
                            <button type="button"
                                class="w-1/2 bg-primary text-white font-medium rounded-md py-1 hover:bg-secondary active:bg-success transition-all ease-linear">Beli</button>
                            <button type="button"
                                class="w-1/2 bg-primary text-white font-medium rounded-md py-1 hover:bg-secondary active:bg-success transition-all ease-linear">Keranjang</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            kategori: [
                { nama: 'Fashion pria' },
                { nama: 'Fashion Wanita' },
                { nama: 'Fashion Bayi' },
                { nama: 'Kaos' },
                { nama: 'Fashion Muslim' },
                { nama: 'Hijab' },
            ],
            listKategori: [],
        }
    }
}
</script>