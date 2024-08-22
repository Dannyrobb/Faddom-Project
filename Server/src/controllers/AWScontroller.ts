import { FastifyRequest, FastifyReply } from 'fastify';
import { getCpuUsage } from '../config/aws.main';

export const AWSendpoint = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const awsRes = await getCpuUsage(request.query);

  reply.send(awsRes);
};
