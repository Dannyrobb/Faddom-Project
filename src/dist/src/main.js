"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const AWSroutes_1 = __importDefault(require("./routes/AWSroutes"));
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify = (0, fastify_1.default)({ logger: true });
fastify.register(cors_1.default, {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});
fastify.register(AWSroutes_1.default);
fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);
    reply.status(500).send({ error: 'error' });
});
const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        fastify.log.info(`Server is running at http://localhost:3000`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
process.on('SIGINT', async () => {
    fastify.log.info('Shutting down server...');
    await fastify.close();
    process.exit(0);
});
start();
exports.default = fastify;
