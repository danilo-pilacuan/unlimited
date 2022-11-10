import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';
import createMutationsSharer from "vuex-shared-mutations";

const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
});


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authenticated: false,
    currentUser: null,
    userType: 0,
    authToken:"",
    cartList:{
        itemsList:[]
    },

  },
  mutations: {
    SET_AUTH:(state,auth)=> state.authenticated = auth,
    SET_AUTH_TOKEN:(state,authToken)=> state.authToken = authToken,
    SET_CART_LIST:(state,cartList)=> state.cartList = cartList,
    SET_USER_TYPE:(state,userType)=> state.userType = userType,
    SET_CURRENT_USER:(state,currentUser)=> state.currentUser = currentUser,
  },
  actions: {
    setAuth: ({commit},auth) => commit('SET_AUTH',auth),
    setAuthToken: ({commit},authToken) => commit('SET_AUTH_TOKEN',authToken),
    setCartList:({commit},cartList)=> commit('SET_CART_LIST',cartList),
    setUserType:({commit},setUserType)=> commit('SET_USER_TYPE',setUserType),
    setCurrentUser:({commit},setCurrentUser)=> commit('SET_CURRENT_USER',setCurrentUser)
  },
  modules: {
  },

  plugins: [vuexLocal.plugin,createMutationsSharer({ predicate: ["SET_CART_LIST"] })],
})

export default store;
