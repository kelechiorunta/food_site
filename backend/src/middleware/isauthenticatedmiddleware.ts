import { RequestHandler } from 'express';

export const isauthenticatedmiddleware: RequestHandler = (req, res, next) => {
  console.log('Authenticated?', req.isAuthenticated());
  console.log('Session:', req.session);
  console.log('User:', req.user);
  res.json({ message: 'Login successful', user: req.user });

  // Check if user is authenticated with Passport
  if (!req.isAuthenticated() || !req.user) {
    return res.status(400).json({ message: 'No authenticated user' }); //res.redirect('http://localhost:3001/login');
  }
  next();
};

export default isauthenticatedmiddleware;
