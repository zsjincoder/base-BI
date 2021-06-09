export default {
    state: {
        // api队列，api是请求方法，mapValue对应请求结果的映射key
        consumerApiQueue: [
            { api: 'consumer1', mapValue: 'realTimeRevenue' },
            { api: 'consumer2', mapValue: 'amountConsumption' },
            { api: 'consumer3', mapValue: 'todayRevenue' }
        ],
        // 实时营收
        realTimeRevenue: null,
        // 消费金额
        amountConsumption: null,
        // 今日营收
        todayRevenue: null
    },
    mutations: {
        setConsumerData(state, data) {
            const { mapValue, result } = data;
            state[mapValue] = result;
        }
    }
};
