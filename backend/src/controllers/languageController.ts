import { Request, Response, RequestHandler } from 'express';

export const translateLanguage: RequestHandler = (req, res) => {
  const translation = req.t?.('greeting');
  res.json(translation);
};
