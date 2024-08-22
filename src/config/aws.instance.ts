import { ec2 } from './aws.config';

interface InstanceIdResponse {
  instanceId: string | null;
}

export async function getInstanceIdFromIp(
  ipAddress: string,
): Promise<InstanceIdResponse> {
  const params: AWS.EC2.DescribeInstancesRequest = {
    Filters: [
      {
        Name: 'private-ip-address',
        Values: [ipAddress],
      },
    ],
  };

  try {
    const data = await ec2.describeInstances(params).promise();
    const reservations = data.Reservations || [];
    if (reservations.length === 0) {
      return { instanceId: null };
    }
    return { instanceId: reservations[0].Instances?.[0].InstanceId || null };
  } catch (err) {
    return { instanceId: null };
  }
}
