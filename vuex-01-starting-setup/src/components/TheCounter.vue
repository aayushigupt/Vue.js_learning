<template>
    <h3> {{ finalCount }} </h3>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
computed: {
    // counter() {
    //   return this.$store.getters.normalizedCount;
    // }
    ...mapGetters('numbers',['finalCount'])
  },
}
</script>

