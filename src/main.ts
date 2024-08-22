import Fastify, {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from 'fastify';
import AWSroutes from './routes/AWSroutes';
import cors from '@fastify/cors';

const fastify: FastifyInstance = Fastify({ logger: true });

fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

fastify.register(AWSroutes);

fastify.setErrorHandler(
  (error: Error, request: FastifyRequest, reply: FastifyReply) => {
    fastify.log.error(error);
    reply.status(500).send({ error: 'error' });
  },
);

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    fastify.log.info(`Server is running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  fastify.log.info('Shutting down server...');
  await fastify.close();
  process.exit(0);
});

start();

export default fastify;
