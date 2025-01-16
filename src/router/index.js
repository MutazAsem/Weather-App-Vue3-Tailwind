import { createRouter, createWebHistory } from 'vue-router';
// Define your routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'), // Lazy-loaded route
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
    },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
