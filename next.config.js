const redirects = require('./config/redirects');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [
      'github.com',
      'unavatar.now.sh',
      'source.unsplash.com',
      'avatars.githubusercontent.com',
      'news.cgtn.com',
      '1.bp.blogspot.com',
      'i.ytimg.com',
      'i.pinimg.com',
      'www.placecage.com',
      'cdn.pixabay.com',
      'images.all-free-download.com',
      'ichef.bbci.co.uk',
      'cdn.leroymerlin.com.br',
      'assets.pokemon.com',
      'www.gsselectcar.com.br',
      'pluralsight.imgix.net',
      'images.unsplash.com',
      'citizengo.org',
    ],
  },
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
