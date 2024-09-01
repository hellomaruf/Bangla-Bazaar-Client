import useOrders from "../Hooks/useOrders";

function Orders() {
  const { ordersData } = useOrders();
  console.log(ordersData);

  return (
    <div className="mt-28">
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {ordersData?.map((item, index) => (
              <tr key={index}>
                <th>{item?.authorName}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
