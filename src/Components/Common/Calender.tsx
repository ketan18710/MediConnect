import React, { useEffect, useState } from "react";
import {
  checkLeapYear,
  getDaysInMonth,
  getMonthName,
  getWeekdayName,
  getFirstDayOfMonthDate,
} from "../../utils";
import Scheduler from "./Scheduler";

function Calendar(props: any) {
  const { doctor_id } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showScheduler, setShowScheduler] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(currentYear, currentMonth)
  );
  const [monthName, setMonthName] = useState(getMonthName(currentMonth));
  const [days, setDays] = useState<any[]>([]);
  useEffect(() => {
    setDaysInMonth(getDaysInMonth(currentYear, currentMonth));
    setMonthName(getMonthName(currentMonth));
  }, [currentYear, currentMonth]);
  console.log({ currentYear, currentMonth, monthName });
  useEffect(() => {
    setDays(datesArraySetter());
  }, [daysInMonth, selectedDate]);
  function handlePrevMonth() {
    const newDate = new Date(currentYear, currentMonth - 1, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
    setSelectedDate(newDate);
  }

  function handleNextMonth() {
    const newDate = new Date(currentYear, currentMonth + 1, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
    setSelectedDate(newDate);
  }

  //   const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  //   const monthName = getMonthName(currentMonth);

  //   const days = [];
  const datesArraySetter = () => {
    let temp = [];
    for (let i = 1; i <= daysInMonth; ) {
      const date: any = new Date(currentYear, currentMonth, i);
      const weekdayObj = getWeekdayName(date);
      let weekday = weekdayObj.dayName.toLowerCase();
      let weekdayIndex = weekdayObj.dayIndex;
      if (i === 1) {
        for (let j = 0; j < weekdayIndex; j++) {
          temp.push(
            <div key={daysInMonth + j + 1} className="day empty"></div>
          );
        }
      }
      temp.push(
        <div
          key={i}
          className={`day ${
            weekday === "saturday" || weekday === "sunday" ? "weekend" : ""
          } ${
            selectedDate.toDateString() === date.toDateString()
              ? "selected text-blue-700"
              : ""
          } cursor-pointer`}
          onClick={() => {
            setShowScheduler(true);
            setSelectedDate(date);
          }}
        >
          <span>{i}</span>
        </div>
      );
      i++;
    }
    return temp;
  };
  const extraColsDiffCalculator = () => {
    const date = getFirstDayOfMonthDate(currentYear, currentMonth);
    const weekdayObj = getWeekdayName(date);
    return weekdayObj.dayIndex;
  };
  return (
    <div className="calendar w-[300px] min-h-[300px] max-w-full p-5 border-4 bg-slate-50 rounded-md">
      {showScheduler ? (
        <Scheduler
          setShowScheduler={setShowScheduler}
          selectedDate={selectedDate}
          currentMonth={currentMonth}
          doctor_id={doctor_id}
          currentYear={currentYear}
        />
      ) : (
        <>
          <div className="header flex justify-between items-center">
            <button onClick={handlePrevMonth}>&lt;</button>
            <h2 className="text-2xl">{`${getMonthName(
              currentMonth
            )} ${currentYear}`}</h2>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
          <div className="days grid grid-cols-7 gap-2 mb-5">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day: string) => getDayLabel(day)
            )}
            {days}
            {/* Add empty day divs to fill out the rest of the grid */}

            {Array.from({
              length: 7 - extraColsDiffCalculator() - (daysInMonth % 7),
            }).map((_, index) => (
              <div
                key={daysInMonth + index + 1}
                className="day empty opacity-60 flex items-center justify-start"
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  function getDayLabel(day: string) {
    return (
      <div className="day flex p-1 items-center justify-center h-10 ">
        {day}
      </div>
    );
  }
}

export default Calendar;
