"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ratelimit_1 = __importDefault(require("../config/ratelimit"));
const ratelimitmiddleware = async (req, res, next) => {
    try {
        console.log('AUTHENTICATED USER', req.user);
        const { success } = await ratelimit_1.default.limit(req.user?._id); //req?.user?.id
        if (!success) {
            return res.status(429).json({
                message: `Rate Limit exceeded for ${req.user?.username}. Too many requests! Please try again later after one minute!`
            });
        }
        next();
    }
    catch (error) {
        console.error('Rate limit error', error);
        next(error);
    }
};
exports.default = ratelimitmiddleware;
