import authService from '.';

describe('authService', () => {
  const auth = authService(null);

  describe('getToken()', () => {
    describe('when user wants to get a token session user', () => {
      test('and user is logged', async () => {});
      test('and user is not logged', async () => {});
    });
  });

  describe('hasActiveSession()', () => {
    describe('when user wants to know if there is an active session', () => {
      test('and user is logged', async () => {});
      test('and user is not logged', async () => {});
    });
  });

  describe('getSession()', () => {
    describe('when user wants to get a user session', () => {
      test('and user is logged', async () => {});
      test('and user is not logged', async () => {});
    });
  });
});
