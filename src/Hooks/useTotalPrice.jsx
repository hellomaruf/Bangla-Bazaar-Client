import useCart from "./useCart";

function useTotalPrice() {
  const { cartData } = useCart();

  const sumOfLatestPrice = cartData
    ?.map((item) => item.totalLatestPrice)
    .reduce((sum, price) => sum + price, 0);
  return { sumOfLatestPrice };
}

export default useTotalPrice;
