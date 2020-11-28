<template>
    <button @click="login" v-if="!isAuth"> Login </button>
    <button @click="logout" v-else> Logout </button>
    <p> {{ userLogin }} </p>
</template>

<script>
export default{
    methods: {
        login() {
            this.$store.dispatch('login');
        },
        logout() {
            this.$store.dispatch('logout');
        }
    },
    computed: {
        userLogin(){
            return this.$store.getters.userLogin;
        },
        isAuth(){
          return  this.$store.getters.userIsAuthenticated;
        }
    }
}
</script>