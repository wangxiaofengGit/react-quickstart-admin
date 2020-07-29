const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'http://api.qcooa.com/qctech',
    changeOrigin:true,
    pathRewrite:{
    "^/api":""
    }
  }));
};