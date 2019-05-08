const server = require('./server');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./docs/swagger');

server.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

server.listen(process.env.PORT || 3000);