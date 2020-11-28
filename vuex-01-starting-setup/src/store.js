import { createStore } from 'vuex';


const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
     },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment');
            }, 1000);
        },
    },
    mutations: {
        increment(state, payload) {
            state.counter = state.counter + payload.value;
        },
    },
    getters: {
        testAuth(state) {
            return state.isLogin;
        },
        normalizedCount(_ , getters) {
            const newCount = getters.finalCount;
            if(newCount < 0){
                return 0;
            }
            if (newCount > 100) {
                return 100;
            }
            return newCount;
        },
        finalCount(state) {
            return state.counter * 2;
        },

    }

}

const store = createStore({
    modules: {
      numbers: counterModule  //here numbers is the namespace
    },
    state() {
        return {
           
            isLogin: false
        }
    },
    mutations: {
        
        setAuth(state, payload) {
            state.isLogin = payload.isAuth;
        }
    },
    actions: {
        
        login(context) { 
            context.commit('setAuth', {isAuth: true})
        },
        logout(context) {
            context.commit('setAuth' , { isAuth: false })
        }
    },
    getters: {
        
       
        userIsAuthenticated(state) {
            return state.isLogin;
        }
    }
});

export default store;