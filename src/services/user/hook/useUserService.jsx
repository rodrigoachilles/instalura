import { useEffect, useState } from 'react';
import userService from '../userService';

const useUserService = {
  getProfilePage() {
    const [response, setResponse] = useState({
      data: null,
      loading: true,
      error: null,
    });

    useEffect(async () => {
      try {
        const responseFromServer = await userService.getProfilePage();
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
    }, []);

    return response;
  },
};

export default useUserService;
