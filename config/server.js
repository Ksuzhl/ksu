const path = require('path');

module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 10000),

  dirs: {
    public: path.resolve(__dirname, '..', 'public'),
  },
});
