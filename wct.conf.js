const proxy = require('express-http-proxy');

module.exports = {
  registerHooks(wct) {
    wct.hook('prepare:webserver', app => {
      app._router.stack.splice(app._router.stack.length - 1);
      app.use('/webpack', proxy('http://localhost:8080'));
      return Promise.resolve();
    });
  },
};
