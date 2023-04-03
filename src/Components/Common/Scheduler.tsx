import React, { useEffect, useState } from "react";
import {
  API_CONSTANTS,
  getDayFromTimeStamp,
  slots as initSlots,
  timeSlotsStatus,
  userRoles,
  USER_STATE_CONSTANTS,
} from "../../utils";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  getTimeSlots,
  resetUserState,
  updateTimeslot,
} from "../../redux/actions";
import Loader from "./Loader";
function Scheduler({
  selectedDate,
  setShowScheduler,
  currentMonth,
  currentYear,
  doctor_id,
  patient_id,
}: any) {
  const dispatch: any = useDispatch();
  const userSelector = useSelector((state: any) => state.UserReducer.user);
  const timeSlotsSelector = useSelector(
    (state: any) => state.UserReducer.timeSlots
  );
  const updateTimeslotSelector = useSelector(
    (state: any) => state.UserReducer.updateTimeslot
  );
  console.log(updateTimeslotSelector);
  const user = userSelector?.data;
  const role = user?.role;
  const [slots, setSlots] = useState<any[]>([]);
  const [selectedTime, setSelectedTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const onSlotClickHandler = (index: number) => {
    if (role === userRoles.DOCTOR) {
      if (slots[index].status === timeSlotsStatus.UNAVAILABLE) {
        updateTimeslotFunc(slots[index], timeSlotsStatus.OPEN, index);
      } else if (slots[index].status === timeSlotsStatus.OPEN) {
        updateTimeslotFunc(slots[index], timeSlotsStatus.UNAVAILABLE, index);
      }
    } else if (role === userRoles.PATIENT) {
      if (slots[index].status === timeSlotsStatus.BOOKED) {
        return;
      } else if (slots[index].status === timeSlotsStatus.OPEN) {
        updateTimeslotFunc(slots[index], timeSlotsStatus.BOOKED, index);
      }
    }
  };
  const getSlotColor = (status: any) => {
    if (status === timeSlotsStatus.UNAVAILABLE) return "bg-gray-400";
    if (status === timeSlotsStatus.OPEN) return "bg-green-600";
    if (status === timeSlotsStatus.BOOKED) return "bg-yellow-500";
  };
  useEffect(() => {
    dispatch(
      getTimeSlots({
        year: currentYear,
        month: currentMonth,
        day: getDayFromTimeStamp(selectedDate),
        doctor_id,
      })
    );
    setLoading(true);
    return () => {
      dispatch(resetUserState(USER_STATE_CONSTANTS.TIMESLOTS));
    };
  }, []);
  const updateTimeslotFunc = (slot: any, status: number, index: number) => {
    // debugger
    const obj: any = {
      doctor_id,
      month: currentMonth,
      day: getDayFromTimeStamp(selectedDate),
      year: currentYear,
      slot: slot.timeSlot.split(" ")[0],
      status,
      index,
    };
    if (role && role === userRoles.PATIENT) {
      obj.patient_id = patient_id;
    }
    dispatch(updateTimeslot(obj));
  };
  useEffect(() => {
    if (timeSlotsSelector.status === API_CONSTANTS.success) {
      setLoading(false);
      let data = timeSlotsSelector.data;
      if (role === userRoles.PATIENT) {
        data = data.filter(
          (slot: any) => slot.status !== timeSlotsStatus.UNAVAILABLE
        );
      }
      setSlots(data);
    } else if (timeSlotsSelector.status === API_CONSTANTS.error) {
      setLoading(false);
    }
  }, [timeSlotsSelector]);
  useEffect(() => {
    if (updateTimeslotSelector.status === API_CONSTANTS.success) {
      setLoading(false);
      let { index, ...data } = updateTimeslotSelector.data;
      setSlots(
        slots.map((slot, slotIndex) => {
          if (slotIndex === index) {
            slot.status = data.status;
          }
          return slot;
        })
      );
    } else if (updateTimeslotSelector.status === API_CONSTANTS.error) {
      setLoading(false);
    }
  }, [updateTimeslotSelector]);

  return (
    <div className="scheduler">
      <h3 className="flex items-center justify-start gap-4 ">
        <span className="backArrow" onClick={() => setShowScheduler(false)}>
          <BiArrowBack className="m-0 cursor-pointer" />
        </span>{" "}
        Events for {selectedDate.toDateString()}
      </h3>
      {loading ? (
        <div className="m-6">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex items-start gap-x-4 justify-start flex-wrap">
            <div className="colorCodeWrapper gap-2 flex items-center justify-start">
              <div className="rounded-full bg-gray-400 h-3 w-3"></div>
              <span>Unavailable</span>
            </div>
            <div className="colorCodeWrapper gap-2 flex items-center justify-start">
              <div className="rounded-full bg-green-600 h-3 w-3"></div>
              <span>Open</span>
            </div>
            <div className="colorCodeWrapper gap-2 flex items-center justify-start">
              <div className="rounded-full bg-yellow-500 h-3 w-3"></div>
              <span>Booked</span>
            </div>
          </div>
          <div className="events h-[300px] my-2 overflow-scroll ">
            <div className="timeslot flex items-center justify-center flex-col gap-2">
              {slots.map((slot, index) => (
                <span
                  className={`p-4 w-full text-center shadow-sm ${getSlotColor(
                    slot.status
                  )} cursor-pointer `}
                  key={index}
                  onClick={() => onSlotClickHandler(index)}
                >
                  {slot.timeSlot}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Scheduler;
