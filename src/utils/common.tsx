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
