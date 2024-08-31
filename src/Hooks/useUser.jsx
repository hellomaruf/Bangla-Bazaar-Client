import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContaxt } from "../Services/AuthProvider";

function useUser() {
  const { user } = useContext(AuthContaxt);
  const email = user?.email;
  const { data: userData, refetch, isPending , isLoading, isFetching} = useQuery({
    queryKey: "userdata",
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/user/${email}`
      );
      return data;
    },
  });
  return { userData, refetch, isLoading ,isPending , isFetching};
}

export default useUser;
