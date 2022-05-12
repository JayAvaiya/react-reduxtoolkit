import axios from "axios";

const endPoint = `https://627c93f0bf2deb7174dcd8e7.mockapi.io/mockapi/users`;
export const fetchUsersList = async () => {
  const res = await axios.get(endPoint);
  return res.data;
};
