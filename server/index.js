require('dotenv').load({ path: '.env' });

const express = require('express');
const next = require('next');
const { createServer } = require('http');
const { parse } = require('url');
const { join } = require('path');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const swaggerUi = require('swagger-ui-express');
const swaggerV1 = require('./api/v1/swagger.json');
const port = parseInt(process.env.PORT, 10) || 3000;
const User = require('./database/orm/Models/User');

app.prepare()
.then(() => {
  const server = express();

  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerV1));

  server.get('/test', (req, res, next) => {
    return User.create({
        firstName: 'Kim',
        lastName: 'HyeonJun'
    })
    .then((user) => res.status(201).json(user))
    .catch(err=> next(err));
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.use(function(err, req, res, next) {
    console.log(err);
    res.send({err:true});
    // logic
  });
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
})