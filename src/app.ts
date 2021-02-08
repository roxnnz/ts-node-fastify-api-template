import fastify from 'fastify';
import { publicRoutes } from './configs/publicRoutes';
import Authentication from './services/auth/authentication';
import administration from './router/platform/administration';
const server = fastify({
  logger: true,
});

const authService = new Authentication();

// hooks;
server.addHook('onRequest', (request, reply, done) => {
  // Token verify and exceptions
  if (publicRoutes.includes(request.routerPath)) {
    done();
  }

  if (request.headers && request.headers.authorization) {
    // verify, only return 401 or 403 for now.
    switch (authService.tokenVerify(request.headers.authorization)) {
      case 401:
        reply.code(401).send('un');
      case 403:
        reply.code(403).send();

      default:
        done();
    }
  } else {
    if (process.env.ENV !== 'dev') {
      reply.code(401).send();
    }
    done();
  }
});

// Declare routes
server.register(administration);

// server.register(require('./router/consumer/product'));
// server.register(require('./router/consumer/payment'));
// server.register(require('./router/consumer/profile'));

// server.register(require('./router/shop-keeper/product'));

// Run the server!
server.listen(3000, function (err: Error, address: string) {
  if (err) {
    server.log.error(err.message);
  }
  server.log.info(`server listening on ${address}`);
});
