import jwt from 'jsonwebtoken';
import { parseCookies } from 'nookies';
import { BASE_URL } from '../../infra/env';
import HttpClient from '../../infra/http';
import loginService, {
  LOGIN_COOKIE_APP_TOKEN,
  USER_NAME,
} from '../login/loginService';

const authService = (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];
  const username = cookies[USER_NAME];

  return {
    async getToken() {
      return token;
    },
    async hasActiveSession() {
      return HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          if (data.authenticated) {
            return true;
          }

          loginService.logout(ctx);
          return false;
        })
        .catch(() => {
          loginService.logout(ctx);
          return false;
        });
    },
    async getSession() {
      const session = jwt.decode(token);
      return { ...session.user, name: username };
    },
  };
};

export default authService;
