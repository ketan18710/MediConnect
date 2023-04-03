import moment from "moment";
import { AUTH_TOKEN, slots } from "./constants";
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
export const getDayFromTimeStamp = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.getDate();
};

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

export function getWeekdayName(date: any) {
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
  return slots[index];
};
