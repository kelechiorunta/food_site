"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ratelimit_1 = require("@upstash/ratelimit");
const redis_1 = require("@upstash/redis");
const ratelimit = new ratelimit_1.Ratelimit({
    redis: redis_1.Redis.fromEnv(),
    limiter: ratelimit_1.Ratelimit.slidingWindow(5, '60 s') //(100, '900000 s')
});
exports.default = ratelimit;
