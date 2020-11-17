import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' }, //or we can use alias in the main route
        {
            name: 'teams', path: '/teams', meta: { needsAuth: true }, components: { default: TeamsList, footer: TeamsFooter }, children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, //teams/teamId
            ]
        }, //alias: '/
        { path: '/users', components: { default: UsersList, footer: UsersFooter } },


        //catchAll should have the last priority
        { path: '/:notFound(.*)', component: NotFound }

    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);

        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    },
}
);
router.beforeEach(function (to, from, next) {

    console.log(to, from);
    next();
    if (to.meta.needsAuth) {
        console.log('Needs Auth');
        next();
    } else {
        next();
    }
});

export default router;