import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import App from './App.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , redirect: '/teams' }, //or we can use alias in the main route
        {
          name: 'teams',  path: '/teams', component: TeamsList, children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, //teams/teamId
        ]}, //alias: '/
        { path: '/users', component: UsersList },
        
        
        //catchAll should have the last priority
        { path: '/:notFound(.*)', component: NotFound }
        
    ],
    linkActiveClass: 'active',
});
const app = createApp(App)

app.use(router);
app.mount('#app');
