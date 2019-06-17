'use strict';

const mock = require('egg-mock');

describe('test/authing.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/authing-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    console.log(app.authing);
    // return app.httpRequest()
    //   .get('/')
    //   .expect('hi, authing')
    //   .expect(200);
  });
});
