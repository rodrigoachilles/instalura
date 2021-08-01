import gitService from '.';

describe('gitService', () => {
  const git = gitService(null);

  describe('getInfo()', () => {
    describe('when user wants to get session user information', () => {
      test('and user is logged', async () => {});
      test('and user is not logged', async () => {});
    });
  });

  describe('getUsersFollowing()', () => {
    describe('when user wants to get session user following', () => {
      test('and user is logged', async () => {});
      test('and user is not logged', async () => {});
    });
  });

  describe('getUserInfo()', () => {
    describe('when user wants to get a specific user information', () => {
      test('and user exists', async () => {});
      test('and user does not exist', async () => {});
    });
  });

  describe('getUserRepositories()', () => {
    describe('when user wants to get a specific user repositories', () => {
      test('and user exists', async () => {});
      test('and user does not exist', async () => {});
    });
  });
});
