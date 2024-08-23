"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstanceIdFromIp = getInstanceIdFromIp;
const aws_config_1 = require("./aws.config");
async function getInstanceIdFromIp(ipAddress) {
    const params = {
        Filters: [
            {
                Name: 'private-ip-address',
                Values: [ipAddress],
            },
        ],
    };
    try {
        const data = await aws_config_1.ec2.describeInstances(params).promise();
        const reservations = data.Reservations || [];
        if (reservations.length === 0) {
            return { instanceId: null };
        }
        return { instanceId: reservations[0].Instances?.[0].InstanceId || null };
    }
    catch (err) {
        return { instanceId: null };
    }
}
