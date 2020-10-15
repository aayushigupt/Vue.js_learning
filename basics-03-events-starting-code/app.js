const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmInput: '',
      lastName: '',
      confirmLast: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout( function () {
            this.counter = 0;
          }, 1000);
      }
    }
  },
  computed: {
    fullName() {
      console.log("running status");
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Gupta';
    }
  },
  methods: {
    outputFullName(lastName) {
      console.log("running status");
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + lastName;

    },
    reset() {
      this.name = '';
    },

    confirmedInput() {
      this.confirmInput = this.name;
      // this.confirmLast = this.lastName;
    },

    submitInput() {
      alert("Submitted Form");
    },

    setLastName(event) {
      this.lastName = event.target.value;
    },

    setName(event) {
      this.name = event.target.value;

    },

    add(num) {
      this.counter = this.counter + num;
    },
    deduce() {
      this.counter--;
    }
  }
});

app.mount('#events');
