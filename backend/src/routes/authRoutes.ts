import express from 'express';
import { body } from 'express-validator';
import passport from 'passport';

import { signInController, signupController } from '../controllers/authController';
import { validateRequest } from '../middleware/validatemiddleware';
import { configureLocalPassport } from '../config/passport';

const authRouter = express.Router();

configureLocalPassport(passport);

const validationLoginSchema = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];

// authRouter.get('/', RequestHandler = (req: Request, res: Response) => {
//   const translation = req.t?.('greeting');
//   res.json(translation);
// });

authRouter.post('/', validationLoginSchema, signupController);

authRouter.post('/signin', validationLoginSchema, validateRequest, signInController);

authRouter.get('/authenticated', (req, res) => {
  console.log(req.session.user);
});

export default authRouter;
