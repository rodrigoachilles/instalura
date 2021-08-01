import { useEffect, useState } from 'react';
import gitService from '../../../../../services/git';

function useGithub() {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const git = gitService(null);

    const fetchData = async () => {
      try {
        const userInfo = await git.getInfo();

        const usersFollowing = await git.getUsersFollowing();
        let followings = [];
        if (usersFollowing) {
          for (const userFollowing of usersFollowing) {
            followings.push(
              await git.getUserInfo({
                user: userFollowing.login,
              }),
            );

            // following.repositories = await git.getUserRepositories({
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

    fetchData();
  }, []);

  return response;
}

export default useGithub;
