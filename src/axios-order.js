import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-react-app-7fc42.firebaseio.com/"
});

export default instance;
