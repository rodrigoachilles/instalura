import photoService from './';

describe('photoService', () => {
  describe('validateUrl()', () => {
    describe('when user submits a photo URL', () => {
      const photo =
        'https://citizengo.org/sites/default/files/styles/large/public/images/test_3.png';

      test.skip('and it is valid', async () => {
        const response = await photoService.validateUrl({
          url: photo.substring(0, photo.length),
        });
        expect(response).toBe(true);
      });

      test.skip('and it is invalid', async () => {
        const response = await photoService.validateUrl({
          url: photo.substring(0, photo.length - 1),
        });
        expect(response).toBe(false);
      });
    });
  });
});
