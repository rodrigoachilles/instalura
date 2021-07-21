import { destroyCookie, setCookie } from 'nookies';
import { BASE_URL } from '../../infra/env';
import HttpClient from '../../infra/http';

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';

const loginService = {
  async login(
    { username, password },
    setCookieModule = setCookie,
    HttpClientModule = HttpClient,
  ) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username, // 'omariosouto'
        password, // 'senhasegura'
      },
    }).then((respostaConvertida) => {
      const { token } = respostaConvertida.data;
      const hasToken = token;
      if (!hasToken) {
        throw new Error('Failed to login');
      }
      const DAY_IN_SECONDS = 86400;

      setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
        sameSite: 'none',
        secure: true,
      });

      return {
        token,
      };
    });
  },
  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
  },
};

export default loginService;
