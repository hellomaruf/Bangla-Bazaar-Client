import useOrders from "../Hooks/useOrders";
import Spinner from "./../Utils/Spinner";
import emptycart from "../assets/Imgs/emptycart.png";
function Orders() {
  let count = 1
  const { ordersData, isLoading } = useOrders();

  return (
    <div className="mt-28 mb-28">
      {ordersData?.length > 0 ? (
        <div className="">
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="overflow-x-auto max-w-7xl w-full mx-auto">
            <table className="table table-auto min-w-max w-full">
              <tbody>
                {ordersData?.map((item, index) => (
                  <tr className="hover:shadow-md hover:border bg-gray-50" key={index}>
                    <th className="flex space-x-2">
                      {item?.productImg?.map((img, imgIndex) => (
                        <img
                          className="w-[60px] shadow-md rounded-full"
                          key={imgIndex}
                          src={img}
                          alt=""
                        />
                      ))}
                    </th>
                    <td>
                      {item?.productName?.map((name, nameIndex) => (
                        <h3 key={nameIndex}>
                          <span className="font-semibold">{count ++}. </span>{name}
                        </h3>
                      ))}
                    </td>
                    <td>Qty- {item?.productName?.length}</td>
                    <td>৳ {item?.ammount}</td>
                    <td>Pay ID- {item?.paymentID.slice(0, 5)}</td>
                    <td className="text-green-600 whitespace-nowrap">{item?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          )}
        </div>
      ) : (
        <div className="">
          <div className="">
            <div className="flex flex-col items-center justify-center  h-[500px] ">
              <img className="w-[200px] md:w-[270px]" src={emptycart} alt="" />
              <h3 className="text-xl md:text-2xl mt-4 text-gray-600 font-semibold">
                Your Basket is lonely
              </h3>
              <h5 className="text-gray-500">Add some items to cheer it up</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
