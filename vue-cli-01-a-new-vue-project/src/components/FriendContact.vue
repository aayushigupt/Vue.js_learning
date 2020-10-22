<template>
  <li>
    <h2>{{ name }} {{ friendIsFavourite ?  '(Favourite)' : ''}}</h2>
    <button @click="toggleDetails">{{ dataVisibility ? 'Hide' : 'Show '}} Details</button>
    <button @click="toggleFavourite"> Switch </button>
    <ul v-if="dataVisibility">
      <li>{{ phoneNumber }}</li>
      <li>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
//This is the Configuration Object
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required : false,
      default: "0"
    }
  },
  data() {
    return {
      dataVisibility: false,
      // friend: {
      //   id: "aayushi",
      //   name: "Aayushi Gupta",
      //   phone: "6377505602",
      //   email: "aayushigupta108@gmail.com",
      // },
      friendIsFavourite: this.isFavourite, //Here it is the recieved prop value
    };
  },
  methods: {
    toggleDetails() {
      this.dataVisibility = !this.dataVisibility;
    },
    toggleFavourite() {
     this.friendIsFavourite = !this.friendIsFavourite;
    }
  },
};
</script>