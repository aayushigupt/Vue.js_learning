function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            countRound: 0,
            winner: null
        };
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            }
            else if (value <= 0) {
                this.winner = 'player';
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            }
            else if (value <= 0) {
                this.winner = 'monster';
            }
        }
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealth < 0) {
                return { width: '0%'};
            }
            return { width: this.monsterHealth + '%' };
        },
        playerHealthBar() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        specialAttackUse() {
            return this.countRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.countRound++;
            const attackValue = getRandomValue(12,5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(15,8);
            this.playerHealth -= attackValue;
        },
        
        attackSpecialMonster() {
            this.countRound++;
            const attackValue = getRandomValue(25,15);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            this.countRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue >= 100) {
                this.playerHealth = 100;
            }
            else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
        restartGame() {
            this.countRound = 0;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.result = null;
        }
    },

});

app.mount('#game');
