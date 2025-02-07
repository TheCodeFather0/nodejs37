import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = async () => {
  const { data } = await axios.get(url);
  console.log(data);
};

export default getAllUsers;
