declare const formatDate: (date: Date) => number
declare const getCurrentDate: () => number
declare const getYesterdayStartDate: () => number
declare const getYesterdayEndDate: () => number
declare const getTodayStartDate: () => number
declare const getTodayEndDate: () => number
declare const getLastWeekLastDate: (date?: Date) => number
declare const getLastWeekFirstDate: () => number
declare const getLastWeekStartDate: () => number
declare const getLastWeekEndDate: () => number
declare const getMonthDays: (month: number) => number
declare const getQuarterStartMonth: () => number
declare const getWeekNum: () => number
declare const getLastMounthStartDate: () => number
declare const getLastMounthEndDate: () => number
declare const getMonthStartDate: () => number
declare const getMonthEndDate: () => number
declare const getLastMonthEndDate: () => number
declare const getQuarterStartDate: () => number
declare const getQuarterEndDate: () => number
declare const getLastyearStartDate: () => number
declare const getLastyearEndDate: () => number
declare const getCurrentYearEndDate: () => number
declare const getOldDaysStartDate: (num = 1) => number

export {
  formatDate,
  getCurrentDate,
  getYesterdayStartDate,
  getYesterdayEndDate,
  getTodayStartDate,
  getTodayEndDate,
  getLastWeekLastDate,
  getLastWeekFirstDate,
  getLastWeekStartDate,
  getLastWeekEndDate,
  getMonthDays,
  getQuarterStartMonth,
  getWeekNum,
  getLastMounthStartDate,
  getLastMounthEndDate,
  getMonthStartDate,
  getMonthEndDate,
  getLastMonthEndDate,
  getQuarterStartDate,
  getQuarterEndDate,
  getLastyearStartDate,
  getLastyearEndDate,
  getCurrentYearEndDate,
  getOldDaysStartDate
}
