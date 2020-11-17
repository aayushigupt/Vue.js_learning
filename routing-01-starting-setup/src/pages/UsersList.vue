<template>
<button @click="confirmInput"> Confirm </button>
<button> Save Changes </button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return {
      saveChange: false,
    }
  },
  inject: ['users'],
  methods: {
    confirmInput(){
     this.$router.push('/teams');
    },
    saveChanges(){
      this.saveChange = true;
    }
  },
  beforeRouteLeave(to, from, next){
    console.log(to, from);
    if(this.saveChange){
      next();
    } else{
      const userSaveChanges = confirm('Are you sure?? You got saved changes');
      next(userSaveChanges);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>