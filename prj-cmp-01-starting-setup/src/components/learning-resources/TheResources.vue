<template>
    <base-card> 
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButton"> Stored Resources </base-button>
        <base-button @click="setSelectedTab('add-resources')" :mode="addResButton"> Add Resources </base-button>
    </base-card>
    <keep-alive>
    <component :is="selectedTab"> </component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResource.vue';
export default {
    components : {
        'stored-resources': StoredResources,
        'add-resources': AddResources,
    },
    data(){
        return{
            selectedTab: 'stored-resources',
            storedResources: [
        {
          id: 'official-docs',
          title: 'Official Guide',
          description: 'The Official Vuejs description',
          link: 'https://vuejs.org',
        },
        {
          id: 'Google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'https://www.google.com',
        },
      ],
        };
    },
    provide(){
       return{
           resources: this.storedResources,
           addResource:  this.addResource,
           deleteResource: this.deleteResource,
       }
    },
    computed: {
        storedResButton(){
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButton(){
            return this.selectedTab=== 'add-resources' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResource(title, description, url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                url: url
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        deleteResource(resId){
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);   //delete
        }
    }
}
</script>