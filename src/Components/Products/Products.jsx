import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../../Utils/Spinner";

function Products() {
  const categoryName = useParams();
  const { data: productData, isLoading } = useQuery({
    queryKey: ["productData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/prodects/${categoryName?.name}`
      );
      return data;
    },
  });
  console.log(productData);
  return (
    <div className="mt-20">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="">
          {productData?.map((data, index) => (
            <div key={index} className="">
              <h2>{data?.productName}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
