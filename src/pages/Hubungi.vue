<template>
    <section class="container mx-auto px-2 md:px-10 py-1.5 sm:py-3 md:py-5">
        <div class="max-w-screen-xl flex justify-center">
            <div class="w-1/2 h-full bg-primary rounded-md shadow-md px-2 py-3">
                <h1 class="text-base sm:text-lg md:text-4xl mb-5 font-medium text-white drop-shadow-sm">Hubungi Kami</h1>
                <form class="block w-full" @submit.prevent="kirim()">
                    <div class="mb-2">
                        <label for="nama" class="w-full capitalize font-medium">Nama</label>
                        <input type="text" name="nama" id="nama"
                            class="w-full border-0 rounded-md p-2 bg-gray-100 focus:ring-white focus:border-0 focus:bg-white"
                            v-model="pengguna.nama">
                    </div>
                    <div class="mb-2">
                        <label for="email" class="w-full capitalize font-medium">email</label>
                        <input type="email" name="email" id="email"
                            class="w-full border-0 rounded-md p-2 bg-gray-100 focus:ring-white focus:border-0 focus:bg-white"
                            v-model="pengguna.email">
                    </div>
                    <div class="mb-2">
                        <label for="ket" class="w-full capitalize font-medium">keterangan</label>
                        <textarea type="text" name="ket" id="ket"
                            class="w-full h-40 border-0 rounded-md p-2 bg-gray-100 focus:ring-white focus:border-0 focus:bg-white"
                            v-model="pengguna.ket"> </textarea>
                    </div>
                    <div class="block">
                        <button type="submit"
                            class="block bg-white w-full p-2 rounded-md font-semibold text-2xl ">Kirim</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            pengguna: {
                nama: null,
                email: null,
                ket: null,
            }
        }
    },
    methods: {
        kirim() {
            if (this.pengguna.nama == null || this.pengguna.email == null || this.pengguna.ket == null) {
                alert('Harap Isi Semua Form')
            } else {
                axios({
                    method: 'post',
                    url: '//admin-enerel.delapain.com/api/keluhan/store',
                    data: this.pengguna,
                    responseType: 'json'
                }).then(() => {
                    alert('berhasil terkirim');
                    this.pengguna.nama =null;
                    this.pengguna.email =null;
                    this.pengguna.ket =null;
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}
</script>