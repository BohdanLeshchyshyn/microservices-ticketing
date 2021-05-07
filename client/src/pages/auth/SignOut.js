import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useRequest from '../../hooks/use-request';

const SignOut = () => {
  const history = useHistory();
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => history.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out ...</div>;
};

export default SignOut;
