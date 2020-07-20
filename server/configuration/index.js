if (process.env.NODE_ENV === 'test') {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      google: {
        clientID: 'number',
        clientSecret: 'string',
      },
      facebook: {
        clientID: 'number',
        clientSecret: 'string',
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET: 'srako',
    oauth: {
      google: {
        clientID: 'srako',
        clientSecret: 'srako',
      },
      facebook: {
        clientID: 'srako',
        clientSecret: 'srako',
      },
    },
  };
}
