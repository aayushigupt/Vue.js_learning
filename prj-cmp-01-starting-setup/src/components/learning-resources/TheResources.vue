<template>
    <base-card> 
        <base-button @click="setSelectedTab('stored-resources')"> Stored Resources </base-button>
        <base-button @click="setSelectedTab('add-resource')"> Add Resources </base-button>
    </base-card>
</template>

<script>
export default {
    data(){
        return{
            selectedTab: 'stored-resources'
        };
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        }
    }
}
</script>