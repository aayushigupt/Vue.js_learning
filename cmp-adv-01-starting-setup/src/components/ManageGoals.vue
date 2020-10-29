<template>
    <h2> Manage Goals </h2>
    <input type="text" ref="goal"/> 
    <button @click="submitGoal"> Submit </button>
    <teleport to="body">
    <error-alert v-if="dataIsInvalid">
        <h2> Alert </h2>
    <p> Please add a valid input </p>
      <button @click="anotherChance"> Okay </button>  
     </error-alert>
     </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
    components: {
        'error-alert': ErrorAlert,
    },
    data(){
        return{
            dataIsInvalid: false,
        }
    },
    methods: {
        submitGoal(){
            const enteredMessage = this.$refs.goal.value;
            if(enteredMessage === ''){
                this.dataIsInvalid = true;
            }
        },
        anotherChance(){
            this.dataIsInvalid = false;
        }
    }
}
</script>