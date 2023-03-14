import moment from "moment";
import { AUTH_TOKEN } from "./constants";
export const openLink = (url: any, newtab: boolean = true) => {
  if (!newtab) {
    window.open(url);
  } else {
    window.open(url, "_blank");
  }
};
export const getAgeInYears = (date: string) => {
  const dateTranform = moment(date, "DD-MM-YYYY").format("YYYY-MM-D");
  var years = moment().diff(dateTranform, "years", false);
  return years;
};
export const getTodayDate = () => moment().format("YYYY-MM-D");
export const request = (url: string, options: any) => {
  if (options.headers) {
    Object.assign(options.headers, { Accept: "application/json" });
    if (!options.headers.Authorization) {
      options.headers.Authorization = `Bearer ${localStorage.getItem(
        AUTH_TOKEN
      )}`;
    }
  }
  return fetch(url, {
    ...options,
    mode: "cors",
  })
    .then((response) => response.json() || response)
    .then((json) => json)
    .catch((err) => ({ err }));
};

export function getDaysInMonth(year: number, month: number) {
  const temp = new Date(year, month, 1, 0, 0, 0);
  const days30Arr = [3, 5, 8, 10];
  const days31Arr = [0, 2, 4, 6, 7, 9, 11];
  if (days30Arr.includes(month)) {
    return 30;
  } else if (days31Arr.includes(month)) {
    return 31;
  } else if (checkLeapYear(year)) {
    return 29;
  } else {
    return 28;
  }
}
export function getFirstDayOfMonthDate(year: number, month: number) {
  return new Date(year, month, 1, 0, 0, 0);
}
export function checkLeapYear(year: number) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
}
export function getMonthName(monthIndex: number) {
  //   const temp = new Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[monthIndex];
}

export function getWeekdayName(date: string) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(date);
  var dayName = days[d.getDay()];
  return { dayName, dayIndex: d.getDay() };
}
export const getTimeSlot = (index: number) => {
  const slots = [
    "00 : 00",
    "00 : 30",
    "01 : 00",
    "01 : 30",
    "02 : 00",
    "02 : 30",
    "03 : 00",
    "03 : 30",
    "04 : 00",
    "04 : 30",
    "05 : 00",
    "05 : 30",
    "06 : 00",
    "06 : 30",
    "07 : 00",
    "07 : 30",
    "08 : 00",
    "08 : 30",
    "09 : 00",
    "09 : 30",
    "10 : 00",
    "10 : 30",
    "11 : 00",
    "11 : 30",
    "12 : 00",
    "12 : 30",
    "13 : 00",
    "13 : 30",
    "14 : 00",
    "14 : 30",
    "15 : 00",
    "15 : 30",
    "16 : 00",
    "16 : 30",
    "17 : 00",
    "17 : 30",
    "18 : 00",
    "18 : 30",
    "19 : 00",
    "19 : 30",
    "20 : 00",
    "20 : 30",
    "21 : 00",
    "21 : 30",
    "22 : 00",
    "22 : 30",
    "23 : 00",
    "23 : 30",
  ];
  return slots[index];
};
