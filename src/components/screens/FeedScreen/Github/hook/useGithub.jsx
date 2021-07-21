import { useEffect, useState } from 'react';
import gitService from '../../../../../services/git';

function useGithub() {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      const userInfo = await gitService.getInfo();

      const usersFollowing = await gitService.getUsersFollowing();
      let followings = [];
      if (usersFollowing) {
        for (const userFollowing of usersFollowing) {
          followings.push(
            await gitService.getUserInfo({
              user: userFollowing.login,
            }),
          );

          // following.repositories = await gitService.getUserRepositories({
          // user: following.login,
          // });
        }
      }
      // usersFollowing = usersFollowing.filter((following) => following.repositories.some(repo => repo.name === 'instalura'))

      setResponse((currentState) => ({
        ...currentState,
        data: { user: userInfo, followings },
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

export default useGithub;
