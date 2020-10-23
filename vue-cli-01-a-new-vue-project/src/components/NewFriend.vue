<template>
    <form @click.prevent ="submitForm">
        <div>
            <label> Name </label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label> Phone Number </label>
            <input type="tel" v-model="enteredPhone">
        </div>
   <div>
            <label> Email Address </label>
            <input type="email" v-model="enteredEmail">
        </div>
        <div>
            <button> Add Friend </button>
        </div>
    </form>
</template>

<script>
    export default{
        emits: ['add-contact'],
        data (){
            return {
                enteredName: '',
                enteredPhone: '',
                enteredEmail: ''
            }
        },
        methods: {
            submitForm(){
                this.$emit('add-contact', this.enteredName,this.enteredPhone, this.enteredEmail);
            }
        }
    }
    

</script>