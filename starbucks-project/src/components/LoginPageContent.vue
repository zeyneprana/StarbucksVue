<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page class="flex flex-center bg-grey-2">
                <q-card class="q-pa-md shadow-2 my_card" bordered>
                    <q-card-section class="text-center">
                        <div class="text-grey-9 text-h5 text-weight-bold">Giriş Yap</div>
                    </q-card-section>
                    <q-card-section>
                        <q-input dense outlined v-model="userData.email" label="Email Adresi"></q-input>
                        <q-input dense outlined class="q-mt-md" v-model="userData.password" type="password"
                            label="Şifre"></q-input>
                    </q-card-section>
                    <q-card-section>
                        <q-btn @click="login(userData)" style="
  border-radius: 8px;" color="dark" rounded size="md" label="Giriş yap" no-caps class="full-width"></q-btn>
                    </q-card-section>
                    <q-card-section class="text-center q-pt-none">
                        <div class="text-grey-8">Starbucks Hesabınız yok mu?
                            <router-link class="text-dark text-weight-bold" :to="{ path: '/register' }">Kayıt
                                ol</router-link>
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

import { authStore } from "@/stores/index"
import { mapActions,mapState } from 'pinia';




export default defineComponent({
    setup() {
        const state = reactive({
            userData: {
                email: "",
                password: ""
            }
        });
        return { ...toRefs(state) };
    },

    methods: {
        //@ts-ignore
        async login(userData) {

            this.setLogin(userData).then(() => {

                if (this.getUser !== null) {
                    //@ts-ignore
                    this.$router.push({ path: '/' })
                }

            })


        },

        ...mapActions(authStore, ["setLogin"])
    },


    computed:{
        ...mapState(authStore,["getUser"])
    },

    components: { FooterSide }
})
</script>

