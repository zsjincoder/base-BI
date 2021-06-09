import axios from 'axios';
// 创建axios默认请求
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
// 配置超时时间
axios.defaults.timeout = 100000;

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);
// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        const { data } = response;
        if (data.code === 0) {
            return data.data;
        } else {
            return Promise.reject(data);
        }
    },
    (error) => {
        const errorInfo = error.response;
        console.log(errorInfo);
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default axios;
