"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCpuUsage = getCpuUsage;
const aws_config_1 = require("./aws.config");
const aws_instance_1 = require("./aws.instance");
async function getCpuUsage({ ipAddress, startTime, endTime, interval, }) {
    if (!ipAddress || !startTime || !endTime || !interval) {
        throw new Error('Invalid input parameters. All parameters are required.');
    }
    try {
        const instanceIdResponse = await (0, aws_instance_1.getInstanceIdFromIp)(ipAddress);
        if (!instanceIdResponse.instanceId) {
            throw new Error(`Instance ID not found for IP address: ${ipAddress}`);
        }
        const params = {
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
        const data = await aws_config_1.cloudwatch.getMetricData(params).promise();
        if (data?.MetricDataResults) {
            const organizedData = data.MetricDataResults[0]?.Timestamps?.map((timestamp, index) => {
                if (data.MetricDataResults) {
                    if (data.MetricDataResults.length > 0 &&
                        data.MetricDataResults[0] &&
                        data.MetricDataResults[0].Values) {
                        return {
                            time: new Date(timestamp),
                            value: data.MetricDataResults[0]?.Values[index],
                        };
                    }
                }
            });
            return JSON.stringify(organizedData, null, 2);
        }
        else {
            return JSON.stringify({
                error: 'We have encountered an error, please try submitting again',
            });
        }
    }
    catch (err) {
        throw new Error('Error fetching CPU usage data.');
    }
}
