'use strict';
const Authing = require('authing-js-sdk');

module.exports = app => {
  app.addSingleton('authing', createAuthing);
};

async function createAuthing(config, app) {

  const client = await new Authing(config);

  app.beforeStart(async () => {
    app.coreLogger.info('[egg-authing] Authing ...');
  });

  return client;
}
