import { cloudwatch } from './aws.config';
import { getInstanceIdFromIp } from './aws.instance';

interface GetCpuUsageParams {
  ipAddress: string;
  startTime: string;
  endTime: string;
  interval: number;
}

export async function getCpuUsage({
  ipAddress,
  startTime,
  endTime,
  interval,
}: GetCpuUsageParams): Promise<any> {
  if (!ipAddress || !startTime || !endTime || !interval) {
    throw new Error('Invalid input parameters. All parameters are required.');
  }

  try {
    const instanceIdResponse = await getInstanceIdFromIp(ipAddress);

    if (!instanceIdResponse.instanceId) {
      throw new Error(`Instance ID not found for IP address: ${ipAddress}`);
    }

    const params: AWS.CloudWatch.GetMetricDataInput = {
      MetricDataQueries: [
        {
          Id: 'm1',
          MetricStat: {
            Metric: {
              Namespace: 'AWS/EC2',
              MetricName: 'CPUUtilization',
              Dimensions: [
                {
                  Name: 'InstanceId',
                  Value: instanceIdResponse.instanceId,
                },
              ],
            },
            Period: interval,
            Stat: 'Average',
          },
          ReturnData: true,
        },
      ],
      StartTime: new Date(startTime),
      EndTime: new Date(endTime),
    };

    const data = await cloudwatch.getMetricData(params).promise();

    if (data?.MetricDataResults) {
      const organizedData = data.MetricDataResults[0]?.Timestamps?.map(
        (timestamp, index) => {
          return {
            time: new Date(timestamp),
            value: data.MetricDataResults[0]?.Values[index],
          };
        },
      );
      return JSON.stringify(organizedData, null, 2);
    } else {
      return JSON.stringify({
        error: 'We have encountered an error, please try submitting again',
      });
    }
  } catch (err) {
    throw new Error('Error fetching CPU usage data.');
  }
}
