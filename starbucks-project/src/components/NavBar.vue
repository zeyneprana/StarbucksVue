<template>
    <div class="row flex justify-between bg-white items-center fixed-top q-px-xl q-py-md shadow-3 headerNavbar">
        <div class="flex">
            <img style="width: 60px;" src="../assets/starbucks-navbar.png">
            <ul class="flex list-style-none q-my-auto">
                <router-link class="text-decoration-none" :to="{ path: '/starbucks-rewards' }">
                    <li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold" href="#">Starbucks
                            Reward</a></li>
                </router-link>
                <router-link class="text-decoration-none" :to="{ path: '/menu' }">
                    <li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold" href="#">Menü</a>
                    </li>
                </router-link>
                <router-link class="text-decoration-none" :to="{ path: '/campaigns' }">
                    <li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold"
                            href="#">Kampanyalar</a></li>
                </router-link>
                <router-link class="text-decoration-none" :to="{ path: '/e-gift' }">
                    <li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold"
                            href="#">E-Gift</a></li>
                </router-link>
                <li class="q-mx-sm"><a class="text-decoration-none text-grey-8 fs-3 text-weight-bold" href="#">Kurumsal
                        Satış</a></li>
            </ul>
        </div>
        <div class="flex items-center">
            <div>
                <ul class="flex items-baseline  list-style-none">
                    <li class="">
                        <q-btn color="white" unelevated text-color="black" icon="location_on" label="Mağazalarımız" />
                    </li>
                    <li class="q-mx-sm ">
                        <q-btn rounded color="green-8 text-weight-bold" label="Alışverişe Başla" />
                    </li>
                </ul>
            </div>
            <div v-if="isAuth == false">
                <ul class="flex items-baseline  list-style-none">
                    <li class="">
                        <router-link class="text-decoration-none" :to="{ path: '/login' }">

                            <q-btn outline rounded color="white" class="text-weight-bold" text-color="black"
                                label="Giriş" />
                        </router-link>

                    </li>
                    <li class="q-mx-sm ">
                        <router-link class="text-decoration-none" :to="{ path: '/register' }">

                            <q-btn rounded color="black" class="text-weight-bold" label="Hemen Katıl" />
                        </router-link>
                    </li>
                </ul>
            </div>
            <div v-if="isAuth == true">
                <ul class="flex items-baseline  list-style-none">
                    <li>
                        <router-link class="text-decoration-none" :to="{ path: '/basket' }">

                            <q-btn rounded color="white" class="text-weight-bold" text-color="black"  label="Sepet" />
                        </router-link>
                    </li>
                    <li>
                        <q-btn @click="logout" rounded color="red" class="text-weight-bold" text-color="black" label="Çıkış Yap" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';

import { authStore } from "@/stores/index"

export default defineComponent({


    methods: {

        logout() {
            this.setUser(null)
        },

        ...mapActions(authStore, ["setUser"])
    },

    computed: {
        ...mapState(authStore, ["isAuth"])
    }


})
</script>


