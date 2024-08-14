import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContaxt } from "../Services/AuthProvider";

function useCart() {
  const { user } = useContext(AuthContaxt);
  const email = user?.email;
  console.log(email, import.meta.env.VITE_LOCALHOST_URL);

  const { data: cartData, refetch } = useQuery({
    queryKey: ["cartData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/cartProduct/${email}`
      );
      return data;
    },
  });
  console.log(cartData);
  const cartLength = cartData?.length;
  return { cartData, cartLength, refetch };
}

export default useCart;