import { FastifyInstance } from 'fastify';
import { AWSendpoint } from '../controllers/AWScontroller';
import { wakeUp } from '../controllers/coldStartController';
const AWSroutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/cpu-usage', AWSendpoint);
  fastify.get('/cold-start-wakeup', wakeUp);
};

export default AWSroutes;
