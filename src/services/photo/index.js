const photoService = {
  validateUrl({ url }) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i',
    );

    if (!!pattern.test(url)) {
      return new Promise((resolve, reject) => {
        const timeout = 500;
        const image = new Image();
        let timer = new Image();
        image.onerror = image.onabort = () => {
          clearTimeout(timer);
          reject(false);
        };
        image.onload = () => {
          clearTimeout(timer);
          resolve(true);
        };
        timer = setTimeout(() => {
          image.src = '';
          reject(false);
        }, timeout);
        image.src = url;
      });
    }

    return false;
  },
};

export default photoService;
