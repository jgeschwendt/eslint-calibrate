import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/', (_request, reply) => {
  void reply.send({ hello: 'world' });
});

export { app };
