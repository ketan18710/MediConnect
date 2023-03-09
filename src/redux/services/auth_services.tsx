import { request } from "../../utils";

export const Auth_Services = {
  login: async (data: any) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await request("/api/login.json", options);
    return res;
  },
};
