"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWScontroller_1 = require("../controllers/AWScontroller");
const AWSroutes = async (fastify) => {
    fastify.get('/api/cpu-usage', AWScontroller_1.AWSendpoint);
};
exports.default = AWSroutes;
