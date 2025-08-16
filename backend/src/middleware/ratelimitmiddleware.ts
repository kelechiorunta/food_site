import { RequestHandler } from 'express';
import ratelimit from '../config/ratelimit';

const ratelimitmiddleware: RequestHandler = async (req, res, next) => {
  try {
    console.log('AUTHENTICATED USER', req.user);
    const { success } = await ratelimit.limit(req.user?._id); //req?.user?.id
    if (!success) {
      return res.status(429).json({
        message: `Rate Limit exceeded for ${req.user?.username}. Too many requests! Please try again later after one minute!`
      });
    }
    next();
  } catch (error) {
    console.error('Rate limit error', error);
    next(error);
  }
};

export default ratelimitmiddleware;
