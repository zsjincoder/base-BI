<template>
    <div class="activityTable">
        <table class="activity_table"
               cellspacing
               cellpadding>
            <tr class="activity_table-head"
                align="center">
                <th width="80px">序号</th>
                <th v-for="item in headList"
                    :key="item.key"
                    :width="`${item.width}px`">{{ item.title }}</th>
            </tr>
            <tr v-for="(item, index) in tableData"
                :key="index"
                align="center"
                :class="(index + 1) % 2 === 0 ? 'even' : 'odd'">
                <td width="80px">{{ `0${index + 1}` }}</td>
                <td v-for="el in headList"
                    :key="el.key"
                    :width="`${el.width}px`"
                    :title="item[el.key]">{{ item[el.key] }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * 表头字段  以及对应的字段名称
         * 使用iview的方式  { title: '', key: '', width: '' }
         */
        headList: {
            type: Array,
            default: () => ([])
        },
        /**
         * 表格数据
         */
        tableData: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            /* tableData: [
                {
                    number: 1,
                    reserve: 'asd',
                    subscriber: 'iii',
                    subscriberID: '2424',
                    reserveTime: '2021-3-18'
                },
                {
                    number: 2,
                    reserve: 's爱我去',
                    subscriber: '1231',
                    subscriberID: '568841',
                    reserveTime: '2021-3-28'
                },
                {
                    number: 3,
                    reserve: '阿打发',
                    subscriber: '11123',
                    subscriberID: '招生大V发',
                    reserveTime: '2021-2-18'
                },
                {
                    number: 4,
                    reserve: '不好用',
                    subscriber: '6122',
                    subscriberID: '+65321',
                    reserveTime: '2021-1-18'
                }, {
                    number: 5,
                    reserve: '不好用',
                    subscriber: '6122',
                    subscriberID: '+65321',
                    reserveTime: '2021-1-18'
                }
            ] */
        };
    }
};
</script>

<style lang="less" scoped>
.activityTable {
    .activity_table {
        margin-top: 15px;
        width: 100%;
        font-size: 14px;
        color: #ffffff;

        .activity_table-head {
            background-color: #15418d;

            th {
                height: 28px;
                font-weight: 400;
            }

            th:first-child {
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }

            th:last-child {
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }

        .even {
            background-color: rgba(21, 65, 141, 0.5);

            td {
                height: 28px;
            }

            td:first-child {
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }

            td:last-child {
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }

        .odd {
            td {
                height: 46px;
            }
        }
    }
}
</style>
