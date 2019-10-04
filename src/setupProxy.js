const proxy = require('http-proxy-middleware');// node 

module.exports = function(app) {
    app.use(proxy('/ajax', { 
      target: 'http://m.maoyan.com',
      changeOrigin:true 
    }));

    app.use(proxy('/ajax2', { 
        target: 'http://m2.maoyan.com',
        changeOrigin:true 
    }));
    app.use(proxy('/ajax3', { 
        target: 'http://m3.maoyan.com',
        changeOrigin:true 
    }));
};