import { useEffect, useState } from 'react';
import userService from '../../../../../services/user';

function usePosts() {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      const response = await userService.getPosts();
      const users = (await userService.getUsers()).data;
      const findUser = (userId) =>
        users.filter((user) => user._id === userId)[0];

      for (const post of response.posts) {
        post.user = findUser(post.user);
        for (const like of post.likes) {
          like.user = findUser(like.user);
        }
      }

      setResponse((currentState) => ({
        ...currentState,
        data: response,
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

export default usePosts;
