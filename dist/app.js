"use strict";
// Require the framework and instantiate it
var fastify = require('fastify')({
    logger: true,
});
// Declare a route
fastify.register(require('./router/admin/index'));
// Run the server!
fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info("server listening on " + address);
});
