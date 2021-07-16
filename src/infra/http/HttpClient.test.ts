import HttpClient from './index';

const fetchModule = jest.fn();

describe('HttpClient()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when HttpClient gets called', () => {
    describe('and succeed', () => {
      it('returns a server response', async () => {
        const url = 'some-url/pi';
        const requestedParameters = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'some-username',
            password: 'some-password',
          }),
        };

        fetchModule.mockImplementationOnce(() =>
          Promise.resolve({
            ok: true,
            json: () => ({
              data: {
                username: 'some-username',
              },
            }),
          }),
        );

        const serverResponse = await HttpClient(
          url,
          {
            method: 'POST',
            body: {
              username: 'some-username',
              password: 'some-password',
            },
          },
          fetchModule,
        );

        expect(fetchModule).toHaveBeenCalledTimes(1);
        expect(fetchModule).toHaveBeenCalledWith(url, requestedParameters);
        expect(serverResponse).toMatchSnapshot();
      });
    });

    describe('and fails', () => {
      it('throws an error', async () => {
        fetchModule.mockImplementationOnce(() =>
          Promise.reject('Falha em pegar os dados do servidor :('),
        );

        expect.assertions(2);

        try {
          await HttpClient('some-url/api', { body: {} }, fetchModule);
        } catch (error) {
          expect(error).toMatch(
            'Falha em pegar os dados do servidor :(',
          );
        }

        expect(fetchModule).toHaveBeenCalledTimes(1);
      });
    });
  });
});
