import { BASE_URL } from '../../infra/env';
import HttpClient from '../../infra/http';
import authService from '../auth';

const postService = (ctx) => {
  const auth = authService(ctx);

  return {
    async create(
      { photoUrl, description, filter },
      HttpClientModule = HttpClient,
    ) {
      const url = `${BASE_URL}/api/posts`;
      try {
        const token = await auth.getToken();
        const response = await HttpClientModule(url, {
          method: 'POST',
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: {
            photoUrl,
            description,
            filter,
          },
        });

        if (response.data) {
          return response.data;
        }

        throw new Error('Não conseguimos criar um post');
      } catch (err) {
        throw new Error('Não conseguimos criar um post');
      }
    },
    async like({ postId }, HttpClientModule = HttpClient) {
      const url = `${BASE_URL}/api/posts/${postId}/like`;
      try {
        const token = await auth.getToken();
        const response = await HttpClientModule(url, {
          method: 'POST',
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (response && response.data) {
          return response.data;
        }

        return undefined;
      } catch (err) {
        console.error(err);
        throw new Error(`Não conseguimos fazer like/dislike no post ${postId}`);
      }
    },
  };
};

export default postService;
