import Default from '@/components/layout/Default';

export default [{
    path: '/',
    name: 'home',
    redirect: { name: 'sell' },
    component: Default,
    children: [{
        path: '/sell',
        name: 'sell',
        component: () => import('@/views/Sell'),
        meta: {
            title: '经营销售'
        }
    }, {
        path: '/consumer',
        name: 'consumer',
        component: () => import('@/views/Consumer'),
        meta: {
            title: '消费者画像'
        }
    }, {
        path: '/performance',
        name: 'performance',
        component: () => import('@/views/Performance'),
        meta: {
            title: '员工绩效'
        }
    }, {
        path: '/activity',
        name: 'activity',
        component: () => import('@/views/Activity'),
        meta: {
            title: '营销活动'
        }
    }, {
        path: '/outlet',
        name: 'outlet',
        component: () => import('@/views/Outlet'),
        meta: {
            title: '智慧门店'
        }
    }]
}, {
    path: '/:pathMatch(.*)',
    redirect: { name: 'home' }
}];
