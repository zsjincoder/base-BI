export default {
    consumer1: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('consumer1');
            }, 1000);
        });
    },

    consumer2: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('consumer2');
            }, 1200);
        });
    },

    consumer3: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('consumer3');
            }, 1500);
        });
    }
};
