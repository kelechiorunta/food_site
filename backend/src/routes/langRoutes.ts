import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { changeLanguage } from '../middleware/languagemiddleware';
import { translateLanguage } from '../controllers/languageController';

const langRouter = express.Router();

langRouter.get('/', changeLanguage, translateLanguage);

export default langRouter;
