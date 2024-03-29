import { request } from "../../utils";

export const User_Services = {
  getDoctorPatients: async (data: any) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await request("/api/patients_list.json", options);
    return res;
  },
  getUser: async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await request("/api/user.json", options);
    return res;
  },
  addPatient: async (data: any) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await request("/api/addPatient.json", options);
    return res;
  },
  uploadDocument: async (data: any) => {
    const options = {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdCIsIm9yZ2FuaXNhdGlvbiI6IkstTGlmZSIsImRldmVsb3BlciI6IkthbmF2IiwiY29tcGFueSI6Ikxvb3BlZCBpbiBDb2RlIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc3NzgxMzM5LCJleHAiOjE2Nzc4Mzg5Mzl9.ybA8xhqJfASMJYLvJj4PPUSETh2FNQw3xo5UIKpeyeQ`,
        // "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await request(
      "http://localhost:3002/klife/data/v1/upload",
      options
    );
    return res;
  },
  getTimeSlots: async (data: any) => {
    const { doctor_id, month, year, day } = data;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdCIsIm9yZ2FuaXNhdGlvbiI6IkstTGlmZSIsImRldmVsb3BlciI6IkthbmF2IiwiY29tcGFueSI6Ikxvb3BlZCBpbiBDb2RlIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc3NzgxMzM5LCJleHAiOjE2Nzc4Mzg5Mzl9.ybA8xhqJfASMJYLvJj4PPUSETh2FNQw3xo5UIKpeyeQ`,
        // "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await request(
      `http://localhost:3000/api/calendary/doctor/available-time-slots?doctor_id=${doctor_id}&day=${day}&month=${month}&year=${year}`,
      options
    );
    res.statusCode = 200;
    return res;
  },
  updateTimeslot: async ({ index, ...data }: any) => {
    // const {}
    // debugger;
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdCIsIm9yZ2FuaXNhdGlvbiI6IkstTGlmZSIsImRldmVsb3BlciI6IkthbmF2IiwiY29tcGFueSI6Ikxvb3BlZCBpbiBDb2RlIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc3NzgxMzM5LCJleHAiOjE2Nzc4Mzg5Mzl9.ybA8xhqJfASMJYLvJj4PPUSETh2FNQw3xo5UIKpeyeQ`,
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await request(
      `http://localhost:3000/api/calendary/doctor/update`,
      options
    );
    res.data = data;
    res.data.index = index;
    res.statusCode = 200;
    return res;
  },
  createBooking: async (data: any) => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdCIsIm9yZ2FuaXNhdGlvbiI6IkstTGlmZSIsImRldmVsb3BlciI6IkthbmF2IiwiY29tcGFueSI6Ikxvb3BlZCBpbiBDb2RlIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc3NzgxMzM5LCJleHAiOjE2Nzc4Mzg5Mzl9.ybA8xhqJfASMJYLvJj4PPUSETh2FNQw3xo5UIKpeyeQ`,
        // "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await request(
      `http://localhost:3000/api/calendary/doctor/update`,
      options
    );
    res.statusCode = 200;
    return res;
  },
};
