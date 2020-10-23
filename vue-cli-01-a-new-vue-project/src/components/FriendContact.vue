<template>
  <li>
    <h2>{{ name }} {{ isFavourite ?  '(Favourite)' : ''}}</h2>
    <button @click="$emit('delete', id)"> Delete </button>
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
    id: {
      type: String,
      required: true,
    },
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
      default: false
    }
  },
 emits: [
   //custom events which will be emit
   'toggle-favourite',
   'delete'
 ],
 
 data() {
    return {
      dataVisibility: false,
      // friend: {
      //   id: "aayushi",
      //   name: "Aayushi Gupta",
      //   phone: "6377505602",
      //   email: "aayushigupta108@gmail.com",
      // },
      // friendIsFavourite: this.isFavourite, //Here it is the recieved prop value
    };
  },
  methods: {
    toggleDetails() {
      this.dataVisibility = !this.dataVisibility;
    },
    toggleFavourite() {  // so that we can listen to the custom event in the vue app
      this.$emit('toggle-favourite',this.id);
    //  this.friendIsFavourite = !this.friendIsFavourite;
    }
  },
};
</script>