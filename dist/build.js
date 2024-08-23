"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsup_1 = require("tsup");
exports.default = (0, tsup_1.defineConfig)({
    entry: ['src/main.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    bundle: true,
    minify: true,
    platform: 'node',
    tsconfig: 'tsconfig.json',
    keepNames: true,
});
