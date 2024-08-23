import { FastifyRequest, FastifyReply } from 'fastify';
import { getCpuUsage, GetCpuUsageParams } from '../config/aws.main';

export const AWSendpoint = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const awsRes = await getCpuUsage(request.query as GetCpuUsageParams);

  reply.send(awsRes);
};
