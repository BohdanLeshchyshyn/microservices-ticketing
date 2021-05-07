import { useEffect, useState } from 'react';
import axios from 'axios';

const AllOrders = () => {
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const getOrders = async () => {
      const { data } = await axios.get(`/api/orders`);
      setOrders(data);
    };
    getOrders();
  }, []);

  if (!orders) return null;

  return (
    <ul>
      {orders.map((order) => {
        return (
          <li key={order.id}>
            {order.ticket.title} - {order.status}
          </li>
        );
      })}
    </ul>
  );
};

export default AllOrders;
