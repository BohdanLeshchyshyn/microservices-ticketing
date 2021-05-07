import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Routes from '../Routes';

const LandingPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  const getCurrentUser = async () => {
    const { data } = await axios.get('/api/users/currentuser');
    setCurrentUser(data?.currentUser);
  };
  useEffect(() => getCurrentUser(), [location]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Routes currentUser={currentUser} />
      </div>
    </div>
  );
};

export default LandingPage;
