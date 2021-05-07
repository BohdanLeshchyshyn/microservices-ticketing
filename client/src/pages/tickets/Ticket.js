import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useRequest from '../../hooks/use-request';

const Ticket = () => {
  const history = useHistory();
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const getTicket = async () => {
      const { data } = await axios.get(`/api/tickets/${ticketId}`);
      setTicket(data);
    };
    getTicket();
  }, []);

  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId,
    },
    onSuccess: (order) => history.push(`/orders/${order.id}`),
  });

  if (!ticket) return null;

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>Price: {ticket.price}</h4>
      {errors}
      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
};

export default Ticket;
