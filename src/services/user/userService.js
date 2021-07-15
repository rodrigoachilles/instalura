import { BASE_URL } from '../../infra/env';
import HttpClient from '../../infra/http';
import authService from '../auth/authService';

const userService = {
  async getProfilePage(ctx) {
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
};

export default userService;
