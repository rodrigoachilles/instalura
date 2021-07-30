import HttpClient from '../../infra/http';
import authService from '../auth';

const urlGithub = 'https://api.github.com';

const gitService = (ctx) => {
  const auth = authService(ctx);

  return {
    async getInfo(HttpClientModule = HttpClient) {
      const { username } = await auth.getSession();
      try {
        return HttpClientModule(`${urlGithub}/users/${username}`, {
          method: 'GET',
        });
      } catch (err) {
        console.error(`err`, err);
        throw new Error(
          'Não foi possível acessar o GitHub para obter as informações.',
        );
      }
    },
    async getUsersFollowing(HttpClientModule = HttpClient) {
      const { username } = await auth.getSession();

      try {
        return HttpClientModule(`${urlGithub}/users/${username}/following`, {
          method: 'GET',
        });
      } catch (err) {
        console.error(`err`, err);
        throw new Error(
          'Não foi possível acessar o GitHub para obter as informações.',
        );
      }
    },
    async getUserInfo({ user }, HttpClientModule = HttpClient) {
      try {
        return HttpClientModule(`${urlGithub}/users/${user}`, {
          method: 'GET',
        });
      } catch (err) {
        console.error(`err`, err);
        throw new Error(
          'Não foi possível acessar o GitHub para obter as informações.',
        );
      }
    },
    async getUserRepositories({ user }, HttpClientModule = HttpClient) {
      try {
        return HttpClientModule(`${urlGithub}/users/${user}/repos`, {
          method: 'GET',
        });
      } catch (err) {
        console.error(`err`, err);
        throw new Error(
          'Não foi possível acessar o GitHub para obter as informações.',
        );
      }
    },
  };
};

export default gitService;
