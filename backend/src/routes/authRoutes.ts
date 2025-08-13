import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const authRouter = express.Router();

const validationSchema = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];

authRouter.post('/lang', validationSchema, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    console.log(email, password);
    // return res.json({ email, password });
    // Force language change if needed
    req.setLocale?.('es');

    // This now contains your Spanish translations
    const translations = req.translation;
    console.log(translations);
    return res.json({ email, password, translations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default authRouter;
