import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };
function SearchProducts() {
  const location = useLocation();
  const query = location?.pathname.split("/")[2];
  const [filteredData, setFilteredData] = useState([]);

  const { data: allProduct } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/allProducts`
      );
      return data;
    },
  });

  // Added search functionality by city name*****************
  useEffect(() => {
    // Filter data based on search query***********
    if (query === "") {
      setFilteredData(allProduct);
    } else {
      const filtered = allProduct?.filter((item) =>
        item.productName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, allProduct]);
  console.log(allProduct);

  console.log(query);
  console.log(filteredData);



  return (
    <div className="pt-24">
      {filteredData?.map((data, index) => (
        <div className="" key={index}>
          <p>{data?.productName}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchProducts;
