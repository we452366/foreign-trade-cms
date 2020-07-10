'use strict';

module.exports = appInfo => {
 
  const config = exports = {};

  config.keys = appInfo.name + '_1594369605244_1614';

  config.middleware = [];

  const userConfig = {
    security: {
      csrf: false
    },
    mysql: {
      client: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'cms'
      },
      app: true,
      agent: false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
