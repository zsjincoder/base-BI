/***
 * 传入数据生成系数，生成当前时刻前固定长度时刻的数据
 * @param extent
 * @param range
 * @return {[]}
 */
export const randomDataMoment = (extent, range = [100, 1000]) => {
    const hours = new Date().getHours();
    const momentList = [];
    for (let i = 0; i < extent; i++) {
        let str = '';
        let number = hours - i;
        number < 0 && (number = 24 + number);
        if (number >= 0 && number < 10) {
            str += `0${number}:00`;
        } else {
            str += `${number}:00`;
        }
        const object = {
            name: str,
            value: range[0] + Math.ceil(Math.random() * (range[1] - range[0]))
        };
        momentList.unshift(object);
    }
    return momentList;
};

/***
 * 传入数据生成系数，生成当前时间前固定长度时间的数据
 * @param extent
 * @param range
 * @param itemList
 * @return {{}}
 */
export const randomDataPeriod = (extent, range = [100, 1000], itemList = []) => {
    const addZero = (num) => {
        return Number(num) < 10 ? '0' + num : num;
    };
    const oneDayTimestamp = 1000 * 60 * 60 * 24;
    const timestamp = new Date().getTime();
    const startTimestamp = timestamp - (extent - 1) * oneDayTimestamp;
    const periodList = {};
    const xAxisData = [];
    for (let i = startTimestamp; i <= timestamp; i += oneDayTimestamp) {
        const month = addZero(new Date(i).getMonth() + 1);
        const date = addZero(new Date(i).getDate());
        xAxisData.push(`${month}/${date}`);
    }
    periodList.xAxisData = xAxisData;
    if (itemList.length > 0) {
        const values = [];
        itemList.forEach(name => {
            values.push({
                name: name,
                data: arrayInRange(extent, range)
            });
        });
        periodList.values = values;
    } else {
        periodList.values = arrayInRange(extent, range);
    }
    return periodList;
};

/***
 * 返回固定长度，在某个范围内的数组
 * @param extent
 * @param range
 * @return {[]}
 */
export const arrayInRange = (extent, range = [100, 1000]) => {
    let i = 0;
    const array = [];
    while (i < extent) {
        i++;
        array.push(range[0] + Math.ceil(Math.random() * (range[1] - range[0])));
    }
    return array;
};
