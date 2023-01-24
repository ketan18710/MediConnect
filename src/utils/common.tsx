import moment from "moment";
export const openLink = (url: any, newtab: boolean = true) => {
  if (!newtab) {
    window.open(url);
  } else {
    window.open(url, "_blank");
  }
};

export const getTodayDate = () => moment().format("YYYY-MM-D");
