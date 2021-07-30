import { BASE_URL } from '../../infra/env';
import HttpClient from '../../infra/http';
import authService from '../auth';

const userService = (ctx) => {
  const auth = authService(ctx);

  return {
    async getPosts() {
      const url = `${BASE_URL}/api/users/posts`;
      try {
        const token = await auth.getToken();
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
        const response = await HttpClient(url, {
          method: 'GET',
        });

        return response.data;
      } catch (err) {
        throw new Error('Não conseguimos recuperar o usuário pedido');
      }
    },
  };
};

export default userService;
