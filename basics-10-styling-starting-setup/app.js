const app = Vue.createApp({
    data() {
        return {
            selectedABox: false,
            selectedBBox: false,
            selectedCBox: false
        };
    },
    methods: {
        selected(box){
            if (box === 'A') {
                this.selectedABox = !this.selectedABox;
            } else if (box === 'B') {
                this.selectedBBox = !this.selectedBBox;
            }
            else{
                this.selectedCBox = !this.selectedCBox;
            }
        }
    }
});

app.mount('#styling');
