import { FastifyRequest, FastifyReply } from 'fastify';

export const wakeUp = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.status(200);
};
