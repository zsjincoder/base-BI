export default {
    state: {
        // api队列
        sellApiQueue: [
            { api: 'sell1', mapValue: 'realTimeRevenue' },
            { api: 'sell2', mapValue: 'amountConsumption' },
            { api: 'sell3', mapValue: 'todayRevenue' }
        ],
        // 实时营收
        realTimeRevenue: null,
        // 消费金额
        amountConsumption: null,
        // 今日营收
        todayRevenue: null
    },
    mutations: {
        setSellData(state, data) {
            const { mapValue, result } = data;
            state[mapValue] = result;
        }
    }
};
