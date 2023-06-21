import axios from "axios";
import { useQuery } from "react-query";
// fetching data using axios if no user is entered return null
export const useFetchData = (user = "") => {
  async function queryUser() {
    if (user !== "") {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      return data;
    }
    return null;
  }
  const { data, isLoading, isError, isIdle } = useQuery(
    ["users", user],
    queryUser
  );
  return [data, isLoading, isError, isIdle];
};
