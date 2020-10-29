<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals  #default="slotProps">
      
     <h2>   {{ slotProps.item }} </h2>
      <p> {{ slotProps['another-prop']  }} </p>
      
   </course-goals> -->
<button @click="selectComponent('active-goals')"> Active Goals </button>
<button @click="selectComponent('manage-goals')"> Manage Goals </button>
   <!-- <active-goals v-if="selectedComponent==='active-goals'"> </active-goals>
   <manage-goals v-if="selectedComponent==='manage-goals'"> </manage-goals> -->
<!-- dynamic component -->
<!-- keep alive does not change the state -->
<keep-alive> 
<component :is="selectedComponent"> </component> 
</keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
export default {
  components: {
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // 'course-goals': CourseGoals,
    'active-goals': ActiveGoals,
    'manage-goals': ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    selectComponent(cmp){
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>