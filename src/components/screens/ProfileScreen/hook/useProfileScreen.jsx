import { useEffect, useState } from 'react';
import userService from '../../../../services/user';

function useProfileScreen() {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    const user = userService(null);

    try {
      const responseFromServer = await user.getPosts();

      setResponse((currentState) => ({
        ...currentState,
        data: responseFromServer,
        loading: false,
        error: null,
      }));
    } catch (err) {
      setResponse((currentState) => ({
        ...currentState,
        data: null,
        loading: false,
        error: err.message,
      }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return response;
}

export default useProfileScreen;
