import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import ViewStartup from '../views/Startup.vue';
import ViewStartupFrontpage from '../views/StartupFrontpage.vue';
import ViewStartupNewSongs from '../views/StartupNewSongs.vue';
import ViewStartupHotSongs from '../views/StartupHotSongs.vue';
import ViewStartupPopularSongs from '../views/StartupPopularSongs.vue';
import ViewSearch from '../views/Search.vue';
import ViewLibrary from '../views/Library.vue';
import ViewSongDetail from '../views/SongDetail.vue';
import ViewSongDetailReviews from '../views/SongDetailReviews.vue';
import ViewSongDetailSpinPlays from '../views/SongDetailSpinPlays.vue';
import ViewUserDetail from '../views/UserDetail.vue';
import ViewSettings from '../views/Settings.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [{
    path: '/',
    name: 'Startup',
    component: ViewStartup,
    children: [
        {
            path: '',
            name: 'Frontpage',
            component: ViewStartupFrontpage
        },
        {
            path: '/new',
            name: 'New Songs',
            component: ViewStartupNewSongs
        },
        {
            path: '/hot',
            name: 'Hot Songs',
            component: ViewStartupHotSongs
        },
        {
            path: '/popular',
            name: 'Popular Songs',
            component: ViewStartupPopularSongs
        }
    ]
}, {
    path: '/search/:searchQuery?',
    name: 'Search',
    component: ViewSearch
}, {
    path: '/library',
    name: 'Library',
    component: ViewLibrary
}, {
    path: '/song/:id',
    name: 'SongDetail',
    component: ViewSongDetail,
    redirect: {
      name: 'SongDetailReviews'
    },
    children: [
        {
            alias: '',
            path: 'reviews',
            name: 'SongDetailReviews',
            component: ViewSongDetailReviews
        },
        {
            path: 'spinplays',
            name: 'SongDetailSpinPlays',
            component: ViewSongDetailSpinPlays
        }
    ]
},, {
    path: '/user/:id',
    name: 'UserDetail',
    component: ViewUserDetail
}, {
    path: '/settings',
    name: 'Settings',
    component: ViewSettings
}];

const router = new VueRouter({
    routes
});

export default router;
