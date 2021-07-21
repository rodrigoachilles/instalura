import { BASE_URL } from '../../infra/env';
import HttpClient from '../../infra/http';
import authService from '../auth';

const users = undefined;

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
};

export default userService;
