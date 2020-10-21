<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ dataVisibility ? 'Hide' : 'Show '}} Details</button>
    <ul v-if="dataVisibility">
      <li>{{ friend.phone }}</li>
      <li>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
//This is the Configuration Object
export default {
  data() {
    return {
      dataVisibility: false,
      friend: {
        id: "aayushi",
        name: "Aayushi Gupta",
        phone: "6377505602",
        email: "aayushigupta108@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.dataVisibility = !this.dataVisibility;
    },
  },
};
</script>