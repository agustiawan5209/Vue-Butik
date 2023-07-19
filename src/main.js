import {
    createApp
} from 'vue'
import './style.css'
import './assets/css/main.css'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import {
    library
} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
    fas
} from '@fortawesome/free-solid-svg-icons'
import {
    far
} from '@fortawesome/free-regular-svg-icons'
import {
    fab
} from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(fas, far, fab)

const Vue = createApp(App);
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

let handleOutsideClick;
Vue.directive('closable', {
    bind(el, binding, vnode) {
        handleOutsideClick = (e) => {
            e.stopPropagation();
            const {
                handler,
                exclude
            } = binding.value;

            // indikasi variabel jika di klik
            let clickedOnExcludedEl = false;
            exclude.forEach(refName => {
                // Jalankan code jika tidak terdeteksi;
                //eksekusi semua code
                if (!clickedOnExcludedEl) {
                    const excludedEl = vnode.context.$refs[refName];
                    // jika aksi terjadi
                    // element yang sama user menklik
                    clickedOnExcludedEl = excludedEl.contains(e.target);
                }
            })
            // melihat periksa untuk melihat apakah elemen yang diklik tidak
            //elemen dialog dan tidak dikecualikan
            if (!el.contains(e.target) && !clickedOnExcludedEl) {
                //Jika elemen yang diklik berada di luar dialog
                //dan bukan tombolnya, lalu panggil handler klik luar
                //dari komponen yang sama direktif ini digunakan
                vnode.context[handler]();
            }
        }
        document.addEventListener('click', handleOutsideClick)
        document.addEventListener('touchstart', handleOutsideClick)

    },
    unbind() {
        document.removeEventListener('click', handleOutsideClick)
        document.removeEventListener('touchstart', handleOutsideClick)
    }
})

Vue.use(router)
Vue.mount('#app')