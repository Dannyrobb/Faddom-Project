import { FastifyInstance } from 'fastify';
import { AWSendpoint } from '../controllers/AWScontroller';

const AWSroutes = async (fastify: FastifyInstance) => {
  fastify.get('/api/cpu-usage', AWSendpoint);
};

export default AWSroutes;
