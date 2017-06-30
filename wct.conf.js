const proxy = require('express-http-proxy');

module.exports = {
  registerHooks(wct) {
    wct.hook('prepare:webserver', app => {
      // eslint-disable-next-line no-underscore-dangle
      app._router.stack.splice(app._router.stack.length - 1);
      app.use('/webpack', proxy('http://localhost:8080'));
      return Promise.resolve();
    });
  },
};
