# 快捷获取日期方法

## usage

```sh
npm install date-api -S
```

**common js**

```js
const dateApi = require('date-api')
```

**es6**

```js
import { formatDate } from 'date-api'
```

**获取时间方法统一返回时间戳**

- formatDate 格式化日期：yyyy-MM-dd
- getCurrentDate 获取当前时间
- getYesterdayStartDate 获取昨天开始时间
- getYesterdayEndDate 获取昨天结束时间
- getTodayStartDate 获取今天开始时间
- getTodayEndDate 获取今天结束时间
- getWeekStartDate 获得本周的开始日期
- getWeekEndDate 获得本周的结束日期
- getMonthDays 获得某月的天数
- getQuarterStartMonth 获得本季度的开始月份
- getLastWeekStartDate 获得上周的开始日期
- getLastWeekEndDate 获得上周的结束日期
- getMonthStartDate 获得本月的开始日期
- getMonthEndDate 获得本月的结束日期
- getLastMonthStartDate 获得上月开始时间
- getLastMonthEndDate 获得上月结束时间
- getQuarterStartDate 获得本季度的开始日期
- getQuarterEndDate 获得本季度的结束日期
- getLastyearStartDate 获取去年开始时间
- getLastyearEndDate 获取去年结束时间
- getCurrentYearStartDate 获取今年开始时间
- getCurrentYearEndDate 获取今年结束时间
- getOldDaysStartDate 获取过去 num 天时间
- getLastMounthStartDate 获取上个月第一天开始时间
- getLastMounthEndDate 获取上个月最后一天结束时间

**如果觉得好用，顺便给个 star** [git repo](https://github.com/liuxsen/date-api)
