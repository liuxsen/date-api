function baseUtil() {
  const now = new Date() // 当前日期
  const nowDayOfWeek = now.getDay() - 1 //  今天本周的第几天
  const nowDay = now.getDate() // 当前日
  let nowMonth = now.getMonth() // 当前月
  let nowYear = now.getYear() // 当前年
  nowYear += nowYear < 2000 ? 1900 : 0 //
  const lastMonthDate = new Date() // 上月日期
  lastMonthDate.setDate(1)
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
  const lastMonth = lastMonthDate.getMonth()
  return {
    now,
    nowDayOfWeek,
    nowDay,
    nowMonth,
    nowYear,
    lastMonth
  }
}

// 格式化日期：yyyy-MM-dd
export function formatDate(date = new Date()) {
  const currDate = new Date(date)
  const myyear = currDate.getFullYear()
  let mymonth = currDate.getMonth() + 1
  let myweekday = currDate.getDate()
  if (mymonth < 10) {
    mymonth = '0' + mymonth
  }
  if (myweekday < 10) {
    myweekday = '0' + myweekday
  }
  return myyear + '-' + mymonth + '-' + myweekday
}

// 获取当前时间
export function getCurrentDate() {
  return new Date().getTime()
}

//  获取昨天开始时间
export function getYesterdayStartDate() {
  const now = new Date()
  let yesterdayStart = new Date(now.setHours(0, 0, 0, 0) - 60 * 60 * 1000 * 24 * 1).getTime()
  return yesterdayStart
}

// 获取昨天结束时间
export function getYesterdayEndDate() {
  const now = new Date()
  let yesterdayEnd = now.setHours(23, 59, 59, 0) - 60 * 60 * 1000 * 24 * 1
  return yesterdayEnd
}

//  获取今天开始时间
export function getTodayStartDate() {
  const now = new Date()
  let nowrdayStart = now.setHours(0, 0, 0, 0)
  return nowrdayStart
}

// 获取今天结束时间
export function getTodayEndDate() {
  const now = new Date()
  let nowrdayStart = now.setHours(23, 59, 59, 0)
  return nowrdayStart
}

// 获得上周最后一天 周日为第一天 周六为最后一天
export function getLastWeekLastDate(date = new Date()) {
  const curr = new Date(date)
  const first = curr.getDate() - curr.getDay() // First day is the day of the month - the day of the week
  const lastWeekLastDay = first - 1
  const lastday = new Date(curr.setDate(lastWeekLastDay)).setHours(23, 59, 59)
  return lastday
}
// 获取上周第一天 周日为第一天 周六为最后一天
export function getLastWeekFirstDate(date = new Date()) {
  const curr = new Date(date)
  const first = curr.getDate() - curr.getDay() // First day is the day of the month - the day of the week
  const lastWeekLastDay = first - 6
  const lastday = new Date(curr.setDate(lastWeekLastDay)).setHours(0, 0, 0)
  return lastday
}

// 获得上周的开始日期 周一为第一天 周日为最后一天
export function getLastWeekStartDate() {
  const { nowDayOfWeek, nowDay, nowMonth, nowYear } = baseUtil()
  const weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 7).getTime()
  return weekStartDate
}
// 获得上周的结束日期 周一为第一天 周日为最后一天
export function getLastWeekEndDate() {
  const { nowDayOfWeek, nowDay, nowMonth, nowYear } = baseUtil()
  const weekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 1, 23, 59, 59, 0).getTime()
  return weekEndDate
}

// 获得本周的开始日期
export function getWeekStartDate() {
  const { nowDayOfWeek, nowDay, nowMonth, nowYear } = baseUtil()
  const weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek).getTime()
  return weekStartDate
}
// 获得本周的结束日期
export function getWeekEndDate() {
  const { nowDayOfWeek, nowDay, nowMonth, nowYear } = baseUtil()
  const weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek), 23, 59, 59).getTime()
  return weekEndDate
}

// 获得某月的天数
export function getMonthDays(myMonth) {
  const { nowYear } = baseUtil()
  const monthStartDate = new Date(nowYear, myMonth, 1)
  const monthEndDate = new Date(nowYear, myMonth + 1, 1)
  const days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24)
  return days
}

// 获得本季度的开始月份
export function getQuarterStartMonth() {
  const { nowMonth } = baseUtil()

  let quarterStartMonth = 0
  if (nowMonth < 3) {
    quarterStartMonth = 0
  }
  if (nowMonth > 2 && nowMonth < 6) {
    quarterStartMonth = 3
  }
  if (nowMonth > 5 && nowMonth < 9) {
    quarterStartMonth = 6
  }
  if (nowMonth > 8) {
    quarterStartMonth = 9
  }
  return quarterStartMonth
}

// 获取当前时间是第几周
export function getWeekNum(date = new Date()) {
  const { nowYear } = baseUtil()
  const thisDay = new Date(date)
  const firstDay = new Date(nowYear, 0, 1) // 本年的第一天,Js月份从0开始记！0就是1月啦。
  let dayWeek = thisDay.getDay() // 今天周几
  if (dayWeek === 0) {
    dayWeek = 7
  }
  let startWeek = firstDay.getDay() // 本年第一天周几
  if (startWeek === 0) {
    startWeek = 7
  }
  // 第几周
  const weekNum = Math.floor(((thisDay.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000) + startWeek - dayWeek) / 7 + 1)
  return weekNum
}

// 获取上个月第一天 开始时间
export function getLastMounthStartDate() {
  const nowdays = new Date()
  let year = nowdays.getFullYear()
  let month = nowdays.getMonth()
  if (month === 0) {
    month = 12
    year = year - 1
  }
  return new Date(year, month, 1, 0, 0, 0)
}

// 获取上个月最后一天结束时间
export function getLastMounthEndDate() {
  const { now } = baseUtil()
  let year = now.getFullYear()
  let month = now.getMonth()
  if (month === 0) {
    month = 12
    year = year - 1
  }
  return new Date(year, month, 0).setHours(23, 59, 59)
}

// 获得本月的开始日期
export function getMonthStartDate() {
  const { nowMonth, nowYear } = baseUtil()
  const monthStartDate = new Date(nowYear, nowMonth, 1).getTime()
  return monthStartDate
}
// 获得本月的结束日期
export function getMonthEndDate() {
  const { nowMonth, nowYear } = baseUtil()
  const monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth), 23, 59, 59, 0).getTime()
  return monthEndDate
}
// 获得上月开始时间
export function getLastMonthStartDate() {
  const { lastMonth, nowYear } = baseUtil()
  let lastMonthStartDate = ''
  if (lastMonth === 11) {
    lastMonthStartDate = new Date(nowYear - 1, lastMonth, 1).getTime()
  } else {
    lastMonthStartDate = new Date(nowYear, lastMonth, 1).getTime()
  }
  return lastMonthStartDate
}
// 获得上月结束时间
export function getLastMonthEndDate() {
  const { lastMonth, nowYear } = baseUtil()
  let lastMonthEndDate = ''
  if (lastMonth === 11) {
    lastMonthEndDate = new Date(nowYear - 1, lastMonth, getMonthDays(lastMonth), 23, 59, 59, 0).getTime()
  } else {
    lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth), 23, 59, 59, 0).getTime()
  }
  return lastMonthEndDate
}
// 获得本季度的开始日期
export function getQuarterStartDate() {
  const { nowYear } = baseUtil()
  const quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1).getTime()
  return quarterStartDate
}
// 获得本季度的结束日期
export function getQuarterEndDate() {
  const { nowYear } = baseUtil()
  const quarterEndMonth = getQuarterStartMonth() + 2
  const quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth)).getTime()
  return quarterStartDate
}

// 获取去年开始时间
export function getLastyearStartDate() {
  let { nowYear } = baseUtil()
  const lastYear = --nowYear
  const lastYearFirstDay = new Date(lastYear, 0, 1).getTime()
  return lastYearFirstDay
}

// 获取去年结束时间
export function getLastyearEndDate() {
  let { nowYear } = baseUtil()
  const lastYear = --nowYear
  const lastYearEndDay = new Date(lastYear, 11, getMonthDays(11), 23, 59, 59, 0).getTime()
  return lastYearEndDay
}

// 获取今年开始时间
export function getCurrentYearStartDate() {
  let { nowYear } = baseUtil()
  const startDay = new Date(nowYear, 0, 1).getTime()
  return startDay
}

// 获取今年结束时间
export function getCurrentYearEndDate() {
  let { nowYear } = baseUtil()
  const endDay = new Date(nowYear, 11, getMonthDays(11), 23, 59, 59, 0).getTime()
  return endDay
}

// 获取过去num天时间
export function getOldDaysStartDate(num = 1) {
  const now = new Date()
  return now.setHours(0, 0, 0, 0) - num * 60 * 60 * 1000 * 24
}

export default {
  formatDate,
  getCurrentDate,
  getYesterdayStartDate,
  getYesterdayEndDate,
  getTodayStartDate,
  getTodayEndDate,
  getWeekStartDate,
  getWeekEndDate,
  getMonthDays,
  getQuarterStartMonth,
  getLastWeekStartDate,
  getLastWeekEndDate,
  getMonthStartDate,
  getMonthEndDate,
  getLastMonthStartDate,
  getLastMonthEndDate,
  getQuarterStartDate,
  getQuarterEndDate,
  getLastyearStartDate,
  getLastyearEndDate,
  getCurrentYearStartDate,
  getCurrentYearEndDate,
  getOldDaysStartDate,
  getLastWeekFirstDate,
  getLastWeekLastDate
}
