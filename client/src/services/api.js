import axios from "axios";
// const url = "http://localhost:3000";
const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:3000/");
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error while getting api data", error);
  }
};
export default fetchData;
