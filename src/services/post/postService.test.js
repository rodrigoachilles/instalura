import postService from './';

describe('postService', () => {
  const post = postService(null);

  describe('create()', () => {
    describe('when user tries to create a post', () => {
      test('and succeed', async () => {});
      test('and it fails', async () => {});
    });
  });

  describe('like()', () => {
    describe('when user tries to like a photo', () => {
      test('and post is not found', async () => {});
      test('and succeed', async () => {});
      test('and it fails', async () => {});
    });
    describe('when user tries to dislike a photo', () => {
      test('and post is not found', async () => {});
      test('and succeed', async () => {});
      test('and it fails', async () => {});
    });
  });
});
