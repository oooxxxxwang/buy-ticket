const BUY_DATE = '2022/12/2'
const TARGET_DATE = '2022/12/30'
const TARGET_TIME = '20:39'
const ID = 'E124993810'

const CHINESE_MAP = {
  '1': '一月',
  '2': '二月',
  '3': '三月',
  '4': '四月',
  '5': '五月',
  '6': '六月',
  '7': '七月',
  '8': '八月',
  '9': '九月',
  '01': '一月',
  '02': '二月',
  '03': '三月',
  '04': '四月',
  '05': '五月',
  '06': '六月',
  '07': '七月',
  '08': '八月',
  '09': '九月',
  '10': '十月',
  '11': '十一月',
  '12': '十二月'
}

;(async () => {
  const buyDate = new Date(`${BUY_DATE} 02:28:00`).getTime()
  let currentDate = new Date().getTime()
  if (currentDate < buyDate) {
    setInterval(() => {
      const currentDate = new Date().getTime();
      if (currentDate >= buyDate && currentDate <= buyDate + 200) {
        location.reload()
      }
    }, 100)
  }
  /* ---------------------------------------------------------------------- */
  const targetDateSplit = TARGET_DATE.split('/')
  const targetYear = targetDateSplit[0]
  const targetMonth = CHINESE_MAP[targetDateSplit[1]]
  const targetDay = targetDateSplit[2]
  const start = document.querySelector('select[name="selectStartStation"]')
  const destination = document.querySelector('select[name="selectDestinationStation"]')
  const startDate = document.querySelector('input[class="uk-input"]')
  const startDateOption = document.querySelector(`span[aria-label="${targetMonth} ${targetDay}, ${targetYear}"]`)
  const startTime = document.querySelector('select[name="toTimeTable"]')
  const people = document.querySelector('select[name="ticketPanel:rows:0:ticketAmount"]')
  const code = document.querySelector('input[id="securityCode"]')
  if (start && destination && startDate && startDateOption && startTime && people) {
    start.value = 3
    destination.value = 7
    startDate.click()
    if (startDateOption.classList.contains('flatpickr-disabled')) {
      location.reload()
    }
    startDateOption.click()
    startTime.value = '830P'
    people.value = '1F'
    code.focus()
    return
  }
  /* ---------------------------------------------------------------------- */
  const id = document.querySelector('input[id="idNumber"]')
  const agree = document.querySelector('input[name="agree"]')
  const finish = document.querySelector('input[id="isSubmit"]')
  if (id && agree && finish) {
    id.value = ID
    agree.click()
    // finish.click()
    return
  }
  /* ---------------------------------------------------------------------- */
  const time = document.querySelector(`input[querydeparture="${TARGET_TIME}"]`)
  const defaultTime = document.querySelector('input[type="radio"]')
  const submit = document.querySelector('input[name="SubmitButton"]')
  if (defaultTime && submit) {
    if (time) {
      time.click()
    } else {
      defaultTime.click()
    }
    submit.click()
    return
  }
})()
