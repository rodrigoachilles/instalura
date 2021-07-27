import { BASE_URL } from '../../infra/env';
import HttpClient from '../../infra/http';
import authService from '../auth';

const userService = {
  async getPosts(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return {
        user: {
          publicacoes: response.data.length,
          seguindo: 22000,
          seguidores: 134000,
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
  async getUsers() {
    const url = `${BASE_URL}/api/users`;
    try {
      return HttpClient(url, {
        method: 'GET',
      });
    } catch (err) {
      throw new Error('Não conseguimos recuperar o usuário pedido');
    }
  },
  async createPost(
    { photoUrl, description, filter },
    HttpClientModule = HttpClient,
  ) {
    const url = `${BASE_URL}/api/posts`;
    try {
      const token = await authService(null).getToken();
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
};

export default userService;
