<template>
    <div>
        <!-- login -->
        <div class="contain py-16">
            <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
                <p class="text-gray-600 mb-6 text-sm">
                   Selamat Datang
                </p>
                <form action="#" @submit.prevent="login" method="post" autocomplete="off">
                    <div class="space-y-2">
                        <div>
                            <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                            <input type="email" name="email" id="email" v-model="user.email"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail.@domain.com">
                            <span class="text-red-500 text-sm opacity-90">{{ validation.email }}</span>
                        </div>
                        <div>
                            <label for="password" class="text-gray-600 mb-2 block">Password</label>
                            <input type="password" name="password" id="password" v-model="user.password"
                                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******">
                            <span class="text-red-500 text-sm opacity-90">{{ validation.password }}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <div class="flex items-center">
                            <input type="checkbox" name="remember" id="remember"
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                            <label for="remember" class="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                        </div>
                        <a href="#" class="text-primary">Forgot password</a>
                    </div>
                    <div class="mt-4">
                        <button type="submit"
                            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Login</button>
                    </div>
                </form>


                <p class="mt-4 text-center text-gray-600">Don't have account? <router-link to="register"
                        class="text-primary">Register
                        now</router-link></p>
            </div>
        </div>
        <!-- ./login -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginView',

    data() {
        return {
            //state loggedIn with localStorage
            loggedIn: localStorage.getItem('loggedIn'),
            //state token
            token: localStorage.getItem('token'),
            token_type: localStorage.getItem('token_type'),
            //state user
            user: [],
            //state validation
            validation: {
                email: null,
                password: null
            },
            //state login failed
            loginFailed: null
        }
    },
    mounted(){
        
    },
    methods: {
        login() {

            axios.post("http://127.0.0.1:8000/api/login", {
                email: this.user.email,
                password: this.user.password
            }).then(res => {

                //debug user login
                console.log(res)

                if (res.status == 200) {

                    //set localStorage
                    localStorage.setItem("loggedIn", true)

                    //set localStorage Token
                    localStorage.setItem("token", res.data.data.access_token)
                    localStorage.setItem("token_type", res.data.data.token_type)

                    //change state
                    this.loggedIn = true

                    //redirect dashboard
                    return this.$router.push({ name: 'home' })

                } else {
                    //set state login failed
                    this.loginFailed = true
                    localStorage.setItem("loggedIn", false)
                }

            }).catch(error => {
                const response = error.response.data;
                console.log(response.meta.message)

            })

        }
    },

    //check user already logged in
    mounted() {
        
        if (this.loggedIn === 'true') {
            return this.$router.push({ name: 'home' })
        }

    }
}
</script>