import { defineStore } from "pinia";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  DocumentData,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/index";

import FeatureCardItem from "@/types/FeatureCardItem";
import Product from "@/types/ProductItem";

export const authStore = defineStore("auth", {
  state: () => ({
    registerCheck: false,
    user: null,
    featureCardList: [] as FeatureCardItem[],
    productList: [] as Product[],
    selectedProduct: {} as Product,
    rewardList: [] as DocumentData[],
    basketList: [] as Product[],
  }),
  actions: {
    //@ts-ignore
    setUser(user) {
      this.user = user;
    },

    // FeatureCard

    async setFeatureCard() {
      const querySnapshot = await getDocs(collection(db, "features"));
      querySnapshot.forEach((doc) => {
        this.featureCardList.push(doc.data() as FeatureCardItem);
      });
    },
    clearFeatureCardList() {
      this.featureCardList = [];
    },

    // Product List

    async setProductList() {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        this.productList.push(doc.data() as Product);
      });
    },
    clearProductList() {
      this.productList = [];
    },

    //@ts-ignore
    async setSelectedProduct(id) {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.selectedProduct = docSnap.data() as Product;
      }
    },

    clearSelectedProduct() {
      this.selectedProduct = {} as Product;
    },

    //Basket

    async addToBasket(product: Product, email: String) {
      //@ts-ignore
      const targetDB = doc(db, "users", email);

      await updateDoc(targetDB, {
        basket: arrayUnion(product),
      });
    },

    async setBasketList() {
      const q = query(
        collection(db, "users"),
        //@ts-ignore
        where("email", "==", this.user?.email)
      );
      const basket = await getDocs(q);
      basket?.forEach((doc) => {
        const dbBasket = [] as Product[];

        dbBasket.push(doc.data().basket);

        dbBasket.forEach((item) => {
          //@ts-ignore
          item?.forEach((item) => {
            this.basketList.push(item);
          });
        });
      });
    },
    clearBasketList() {
      this.basketList = [];
    },

    // Reward List

    async setRewardList() {
      const querySnapshot = await getDocs(collection(db, "rewards"));
      querySnapshot.forEach((doc) => {
        this.rewardList.push(doc.data() as DocumentData);
      });
    },
    clearRewardList() {
      this.rewardList = [];
    },

    //@ts-ignore
    async setRegister(userData) {
      if (
        userData.password != null &&
        userData.password == userData.password2
      ) {
        const data = {
          ...userData,
          basket: [],
        };
        delete data.password2;

        const userId = Math.floor(Math.random() * 10000) + 1;

        await setDoc(doc(db, "users", data.email), {
          userId: userId,
          ...data,
        });

        this.registerCheck = true;
      }
    },

    //@ts-ignore
    async setLogin(userData) {
      let user = {
        ...userData,
      };

      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (user.password !== docSnap.data().password) {
          alert("Şifre hatalı");
        } else {
          user = docSnap.data();
          delete user.password;
          this.setUser(user);
        }
      } else {
        alert("Böyle bir hesap yok");
      }
    },
  },

  getters: {

    getRegisterCheck(state){
      return state.registerCheck
    },

    isAuth(state) {
      return state.user !== null;
    },

    getUser(state) {
      return state.user;
    },
    getFeatureCardList(state) {
      return state.featureCardList;
    },

    getProductList(state) {
      return state.productList;
    },

    getSelectedProduct(state) {
      return state.selectedProduct;
    },

    getRewardList(state) {
      return state.rewardList;
    },

    getBasketList(state) {
      return state.basketList;
    },
  },
});
