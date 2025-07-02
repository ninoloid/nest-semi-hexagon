export default {
  test: {
    corsOrigin: '*',
    corsHeaders: ['Link', 'Content-Disposition'],
  },
  development: {
    corsOrigin: '*',
    corsHeaders: ['Link', 'Content-Disposition'],
  },
  qa: {
    corsOrigin: /\.url\.com/,
    corsHeaders: ['Link', 'Content-Disposition'],
  },
  prod: {
    corsOrigin: /\.url\.com/,
    corsHeaders: ['Link', 'Content-Disposition'],
  },
};
