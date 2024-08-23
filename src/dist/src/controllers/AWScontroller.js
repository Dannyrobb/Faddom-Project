"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSendpoint = void 0;
const aws_main_1 = require("../config/aws.main");
const AWSendpoint = async (request, reply) => {
    const awsRes = await (0, aws_main_1.getCpuUsage)(request.query);
    reply.send(awsRes);
};
exports.AWSendpoint = AWSendpoint;
