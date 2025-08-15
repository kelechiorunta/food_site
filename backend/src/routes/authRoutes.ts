import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { changeLanguage } from '../controllers/langController';

const authRouter = express.Router();

const validationSchema = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];

authRouter.get('/test', changeLanguage, (req: Request, res: Response) => {
  //   const lang = req.query.lang; // access query here
  //   const greeting = req.query.greeting; // access query here
  const translation = req.t?.('greeting');
  res.json(translation);
});

authRouter.post('/lang', validationSchema, (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    let translations: any;

    // Set locale to Spanish
    if (typeof req.t === 'function') {
      req.t('es');
      translations = req.t('WELCOME_MESSAGE');
    }

    // Now get the translations from res.locals
    // const translations = req.t('es');
    console.log('Loaded translations:', translations);

    res.json({ email, password, translations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default authRouter;
