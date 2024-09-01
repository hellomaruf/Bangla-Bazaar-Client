import { useContext } from "react";
import { AuthContaxt } from "../Services/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useOrders() {
  const { user } = useContext(AuthContaxt);
  const email = user?.email;
  const { data: ordersData , isLoading} = useQuery({
    queryKey: ["ordersData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/orders/${email}`
      );
      return data;
    },
  });
  return { ordersData, isLoading };
}

export default useOrders;
