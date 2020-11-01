<template>
<the-header title="RememberMe">
</the-header>
<stored-resources :resources="storedResources">

</stored-resources>

</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: {
   'stored-resources': StoredResources,
   'the-header': TheHeader
  },
  data() {
    return {
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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

