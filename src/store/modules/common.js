import { baseAPI } from '@/api';

// 请求定时器
let timer = null;

export default {
    state: {
        // 定义每个路由模块的请求队列，模块名称，mutation方法
        apiQueues: [
            { queue: 'sellApiQueue', module: 'sell', setDataFunc: 'setSellData' },
            { queue: 'consumerApiQueue', module: 'consumer', setDataFunc: 'setConsumerData' }
        ],
        // navTab头部选中的当前值
        navActive: 0,

        // 测试数据
        num: 0
    },
    getters: {
        getNum: (state) => state.num,
        getNavActive: (state) => state.navActive
    },
    actions: {
        // 统一更新数据
        unifiedUpdateData({ state, rootState, commit }) {
            const { queue, module, setDataFunc } = state.apiQueues[state.navActive];
            const activeStateQueue = rootState[module][queue];
            activeStateQueue.forEach(item => {
                baseAPI(item).then(res => {
                    const { result, mapValue } = res;
                    console.log(result);
                    commit(setDataFunc, { result, mapValue });
                });
            });
        },

        startNumber: ({ state, commit, dispatch }) => {
            timer && clearInterval(timer);
            timer = setInterval(() => {
                const num = state.num + Number(parseInt((Math.random() * 10).toString()));
                commit('setNum', num);
                dispatch('unifiedUpdateData');
            }, 3000);
        }
    },
    mutations: {
        setNavActive(state, value) {
            state.navActive = value;
        },
        setNum(state, value) {
            state.num = value;
        }
    }
};
