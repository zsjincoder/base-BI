import sell from '@/api/sell';
import consumer from '@/api/consumer';
const APIS = { ...sell, ...consumer };

/***
 * 返回传入参数请求的结果
 * @param queueItem
 * @return {Promise<{result, mapValue: *}>}
 */
export const baseAPI = async (queueItem) => {
    const result = await APIS[queueItem.api]();
    const { mapValue } = queueItem;
    return { result, mapValue };
};
