import useTotalPrice from "../Hooks/useTotalPrice";

function ProceedToCheckout() {
  const { sumOfLatestPrice } = useTotalPrice();

  return <div className="mt-28">{sumOfLatestPrice}</div>;
}

export default ProceedToCheckout;
