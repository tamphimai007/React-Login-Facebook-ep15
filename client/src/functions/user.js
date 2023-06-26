import axios from "axios";

export const list = async (authtoken) =>
  await axios.get(process.env.REACT_APP_API + "/user", {
    headers: {
      authtoken,
    },
  });
export const changeRole = async (authtoken,data) =>
  await axios.post(process.env.REACT_APP_API + "/change-role",{data}, {
    headers: {
      authtoken,
    },
  });
