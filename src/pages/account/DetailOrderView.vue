<template>
    <div>
        <div class="flex flex-col max-w-full p-6 space-y-4 sm:p-10">
            <h2 class="text-xl font-semibold">Detail Pemesanan barang</h2>
            <div class="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">

                <div class="flex flex-col space-y-4">
                    <div>
                        <h2 class="text-2xl font-semibold">{{ Transaction.name }}</h2>
                        <span class="text-sm dark:text-gray-400">Alamat : {{ Transaction.address }}</span>
                    </div>
                    <div class="space-y-1">
                        <span class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address"
                                class="w-4 h-4">
                                <path fill="currentColor"
                                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z">
                                </path>
                            </svg>
                            <span class="dark:text-gray-400">{{ Transaction.email }}</span>
                        </span>
                        <span class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber"
                                class="w-4 h-4">
                                <path fill="currentColor"
                                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z">
                                </path>
                            </svg>
                            <span class="dark:text-gray-400">{{ Transaction.number }}</span>
                        </span>
                        <span class="flex items-center space-x-2">
                            <div class="dark:text-gray-400">Status Transaksi : <span
                                    :class="Transaction.transaction_status == 'PENDING' ? 'bg-error' : 'bg-success'"
                                    class="text-white px-2 py-1.5 rounded-lg select-none">{{ Transaction.transaction_status
                                    }}
                                </span>
                            </div>
                        </span>
                        <span class="flex items-center space-x-2">
                            <span class="dark:text-gray-400">Total Transaksi : {{ rupiah(Transaction.transaction_total)
                            }}</span>
                        </span>
                    </div>
                </div>
            </div>
            <ul class="flex flex-col divide-y divide-gray-700">
                <li v-for="item in Transaction.details" class="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div class="flex w-full space-x-2 sm:space-x-4">
                        <!-- <img class="flex-shrink-0 object-cover w-20 h-20  rounded outline-none sm:w-32 sm:h-32 "
                            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                            alt="Polaroid camera"> -->
                        <div class="flex flex-col justify-between w-full pb-4">
                            <div class="flex justify-between w-full pb-2 space-x-2">
                                <div class="space-y-1">
                                    <h3 class="text-lg font-semibold leadi sm:pr-8">{{ item.name }}</h3>
                                    <p class="text-sm ">Kategori :{{ item.category }}</p>
                                    <p class="text-sm ">Jumlah :{{ item.quantity }}</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-lg font-semibold">{{ rupiah(item.price) }}</p>
                                </div>
                            </div>
                            <div class="flex text-sm divide-x">
                                <router-link :to="{ name: 'detailproduct', params: { name: item.name, id: item.id } }"
                                    title="Detail">
                                    <button type="button" class="flex items-center px-2 py-1 space-x-1">
                                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                                        <span>Cek Barang</span>
                                    </button>
                                </router-link>

                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>

import axios from 'axios';
export default {
    data() {
        return {
            User: [],
            access_token: localStorage.getItem("token"),
            loggedIn: localStorage.getItem("loggedIn"),
            Transaction: [],
            Next: 1,
            before: 1,
            next_page_url: null,
            last_page_url: null,
            transaction_id: this.$route.params.transaction_id,
        };
    },
    created() {
        // Get User Account
        // this.GetTransaction();
    },
    methods: {
        rupiah(number) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            }).format(number);
        },
        GetTransaction(url) {
            if (this.loggedIn) {
                axios.get("http://127.0.0.1:8000/api/user", {
                    headers: { Authorization: "Bearer " + this.access_token }
                })
                    .then(res => {
                        this.User = res.data;
                        // Get Transaction Data
                        axios.get(url, {
                            params: {
                                user_id: res.data.id,
                            }
                        }).then((tr) => {
                            this.Transaction = tr.data.data;
                            this.next_page_url = tr.data.data.next_page_url;
                            this.last_page_url = tr.data.data.last_page_url;
                            console.log(this.Transaction)
                        }).catch(err => console.log(err));
                        // End Transaction
                    }).catch(error => console.log(error));
            }
        },
        GetPage(url) {
            this.GetTransaction(url)

        }
    },
    mounted() {
        this.GetTransaction("http://127.0.0.1:8000/api/transactions?transactions_id=" + this.transaction_id)
    },
    // components: { PaginationView }
}
</script>