class DateJs {
  constructor(date = new Date()) {
    if(date === 0) {
      this.year =
      this.second =
      this.millisecond =
      this.weekDay =
      this.day =
      this.hour =
      this.month =
      this.minute = 0
      return
    }
    this.year = date.getFullYear()
    this.second = date.getSeconds()
    this.millisecond = date.getMilliseconds()
    this.weekDay = date.getDay()
    this.day = date.getUTCDate()
    this.hour = date.getHours()
    this.month = date.getMonth() + 1
    this.minute = date.getMinutes()
  }
  format(str) {
    function add0(a) {
      return a < 10 ? '0' + a : a
    }
    let replaces = {
      d: this.day,
      dd: add0(this.day),
      m: this.month,
      mm: add0(this.month),
      y: this.year,
      yy: this.year.toString().substr(2),
      h: this.hour,
      hh: add0(this.hour),
      min: this.minute,
      minmin: add0(this.minute),
      s: this.second,
      ss: add0(this.second),
      mil: this.millisecond
    }
    return str.replace(/[a-z]+/g, function(match) {
      return (typeof replaces[match] !== 'undefined' && replaces[match].toString()) || match
    })
  }
  getDate() {
    let {year, month, day, hour, minute, second, millisecond} = this
    return new Date(year, month-1, day, hour, minute, second, millisecond)

  }
  getTime() {
    return this.getDate().getTime()
  }
}

/*
Use example:
let date = new DateJs()
date.year = 2019
date.month = 1
date.day = 1

console.log(date.format('dd/mm/y, hh:ss:mil'))
*/
