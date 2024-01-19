<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="flex flex-center bg-grey-2">
                <q-card class="q-pa-md shadow-2 my_card" bordered>
                    <q-card-section class="text-center">
                        <div class="text-grey-9 text-h5 text-weight-bold">Kayıt Ol</div>
                    </q-card-section>
                    <q-card-section>
                        <q-input dense outlined v-model="userData.email" label="Email Adresi"></q-input>
                        <q-input dense outlined class="q-mt-md" v-model="userData.password" type="password"
                            label="Şifre"></q-input>
                        <q-input dense outlined class="q-mt-md" v-model="userData.password2" type="password"
                            label="Şifre tekrarı"></q-input>
                    </q-card-section>
                    <q-card-section>
                        <q-btn @click="createUser(userData)" style="
  border-radius: 8px;" color="dark" rounded size="md" label="Kayıt ol" no-caps class="full-width"></q-btn>
                    </q-card-section>
                    <q-card-section class="text-center q-pt-none">
                        <div class="text-grey-8">Zaten Starbucks hesabım var,
                            <router-link class="text-dark text-weight-bold" :to="{ path: '/login' }">Giriş yap</router-link>

                        </div>
                    </q-card-section>

                </q-card>

            </q-page>
            <div class="row justify-center">
                <div class="col-4">
                    <FooterSide />

                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import FooterSide from './FooterSide.vue';

import { mapState, mapActions } from 'pinia';
import { authStore } from '@/stores';


export default defineComponent({
    setup() {
        const state = reactive({
            userData: {
                email: "",
                password: "",
                password2: ""
            }

        });
        return { ...toRefs(state) };
    },

    methods: {
        //@ts-ignore
        async createUser(userData) {

            this.setRegister(userData)

            setTimeout(() => {
                if (this.getRegisterCheck) {
                    //@ts-ignore
                    this.$router.push({ path: "/login" })
                }
            }, 1500);
        },

        ...mapActions(authStore, ["setRegister"])
    },

    computed: {
        ...mapState(authStore, ["getRegisterCheck"])
    },


    components: { FooterSide }
})
</script>

