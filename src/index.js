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

// 格式化日期：yyyy-MM-dd
export function formatDate(date) {
  const myyear = date.getFullYear()
  let mymonth = date.getMonth() + 1
  let myweekday = date.getDate()
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

// 获得本周的开始日期
export function getWeekStartDate() {
  const weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek).getTime()
  return weekStartDate
}
// 获得本周的结束日期
export function getWeekEndDate() {
  const weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek), 23, 59, 59).getTime()
  return weekEndDate
}

// 获得某月的天数
export function getMonthDays(myMonth) {
  const monthStartDate = new Date(nowYear, myMonth, 1)
  const monthEndDate = new Date(nowYear, myMonth + 1, 1)
  const days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24)
  return days
}
// 获得本季度的开始月份
export function getQuarterStartMonth() {
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

// 获得上周的开始日期
export function getLastWeekStartDate() {
  const weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 7).getTime()
  return weekStartDate
}
// 获得上周的结束日期
export function getLastWeekEndDate() {
  const weekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 1, 23, 59, 59, 0).getTime()
  return weekEndDate
}
// 获得本月的开始日期
export function getMonthStartDate() {
  const monthStartDate = new Date(nowYear, nowMonth, 1).getTime()
  return monthStartDate
}
// 获得本月的结束日期
export function getMonthEndDate() {
  const monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth), 23, 59, 59, 0).getTime()
  return monthEndDate
}
// 获得上月开始时间
export function getLastMonthStartDate() {
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
  const quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1).getTime()
  return quarterStartDate
}
// 获得本季度的结束日期
export function getQuarterEndDate() {
  const quarterEndMonth = getQuarterStartMonth() + 2
  const quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth)).getTime()
  return quarterStartDate
}

// 获取去年开始时间
export function getLastyearStartDate() {
  let nowYear = now.getYear() // 当前年
  nowYear += nowYear < 2000 ? 1900 : 0 //
  const lastYear = --nowYear
  const lastYearFirstDay = new Date(lastYear, 0, 1).getTime()
  return lastYearFirstDay
}

// 获取去年结束时间
export function getLastyearEndDate() {
  let nowYear = now.getYear() // 当前年
  nowYear += nowYear < 2000 ? 1900 : 0 //
  const lastYear = --nowYear
  const lastYearEndDay = new Date(lastYear, 11, getMonthDays(11), 23, 59, 59, 0).getTime()
  return lastYearEndDay
}

// 获取今年开始时间
export function getCurrentYearStartDate() {
  let nowYear = now.getYear() // 当前年
  nowYear += nowYear < 2000 ? 1900 : 0 //
  const startDay = new Date(nowYear, 0, 1).getTime()
  return startDay
}

// 获取今年结束时间
export function getCurrentYearEndDate() {
  let nowYear = now.getYear() // 当前年
  nowYear += nowYear < 2000 ? 1900 : 0 //
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
  getOldDaysStartDate
}
