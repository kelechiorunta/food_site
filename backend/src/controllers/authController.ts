import { Request, Response, RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import passport from 'passport';
import User from '../models/User';

// export const signupController = async (req: Request, res: Response) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;
//     let translations: any;

//     // Translate the greeting to the selected language from the the query string in the middleware
//     if (typeof req.t === 'function') {
//       translations = req.t('greeting');
//     }
//     console.log('Loaded translations:', translations);

//     res.json({ email, password, translations });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

export const signupController: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, password, email } = req.body;

  try {
    if (!username || !password || !email) {
      return res.status(400).json({ error: 'All fields are required!' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists!' });
    }

    const newUser = new User({ username, password, email });
    await newUser.save();

    // Optionally log them in immediately:
    req.login(newUser, (err: Error) => {
      if (err) return res.status(500).json({ error: 'Auto-login failed after signup' });
      return res.status(201).json({ message: 'Signup successful', user: newUser });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error during signup' });
  }
};

export const signInController: RequestHandler = (req, res, next) => {
  passport.authenticate('local', (err: any, user: Express.User, info: { message: any }) => {
    if (err || !user) {
      return res.status(401).json({ error: info?.message || 'Unauthorized' });
    }

    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ error: 'Login error' });
      req.session.user = user;
      req.session.authenticated = true;
      next();
      //return res.json({ message: 'Login successful', user: req.user });
    });
  })(req, res, next);
};
