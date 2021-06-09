export default {
    sell1: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('sell1');
            }, 1000);
        });
    },

    sell2: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('sell2');
            }, 1200);
        });
    },

    sell3: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('sell3');
            }, 1500);
        });
    }
};
