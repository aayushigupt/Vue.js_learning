<template>
    <button @click="increment({value: 10})"> Add 10 </button>
</template>


<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne(){
        //     this.$store.dispatch({
        //         type: 'increment',
        //         value: 10
        //     });
        // }
        ...mapActions('numbers',['increment'])
    }
}
</script>