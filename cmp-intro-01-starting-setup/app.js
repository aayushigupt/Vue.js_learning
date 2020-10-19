const app = Vue.createApp({
    data() {
        return {

            friends: [
                {
                    id: 'aayushi',
                    name: 'Aayushi Gupta',
                    email: 'aayushigupta108@gmail.com',
                    phone: '6377505602',
                }
            ],
        };
    },
    methods: {

    }
});

//it is a custom HTML element

app.component('friend-component', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleData">{{ dataVisibility ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="dataVisibility">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
    `,
    data() {
        return {
            dataVisibility: false,
            friend: {
                id: 'aayushi',
                name: 'Aayushi Gupta',
                email: 'aayushigupta108@gmail.com',
                phone: '6377505602',
            }
        };

    },
    methods: {
        toggleData() {
            this.dataVisibility = !this.dataVisibility;
        }
    }
});

app.mount('#app');