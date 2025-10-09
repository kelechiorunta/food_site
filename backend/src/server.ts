import express, { Request, RequestHandler, Response } from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import flash from 'connect-flash';
import helmet from 'helmet';
import session from 'express-session';
import cors from 'cors';
import bodyParser, { OptionsUrlencoded } from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import ConnectMongoDBSession from 'connect-mongodb-session';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';
import path from 'path';
import passport from 'passport';

import authRouter from './routes/authRoutes';
import langRouter from './routes/langRoutes';
import { connectDB } from './config/db';
import ratelimitmiddleware from './middleware/ratelimitmiddleware';
import isauthenticatedmiddleware from './middleware/isauthenticatedmiddleware';

const app = express();

const DEV_PORT = 3110;

const PORT = process.env.PORT || DEV_PORT;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',');
console.log(allowedOrigins);

const corsOption = {
  origin: (origin: any, callback: (arg0: any, arg1: any) => any) => {
    if (allowedOrigins?.includes(origin) || !origin) {
      return callback(null, true);
    } else {
      return callback(false, 'Domain not supported');
    }
  },
  allowedHeaders: ['Content-Type', 'Authorization'],
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

const MongoDBStore = ConnectMongoDBSession(session);

const mongo_db_uri: any = process.env.MONGO_URI;

const store: any = new MongoDBStore({
  uri: mongo_db_uri,
  collection: 'sessions',
  expires: 1000 * 60 * 60 * 24 * 7
});

console.log('SECRET', process.env.SESSION_SECRET);
const sessionOptions: any = {
  name: 'secret_auth_session',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store
};

const isDev = process.env.NODE_ENV !== 'production';

const i18nOptions: any = {
  backend: {
    loadPath: isDev
      ? path.join(process.cwd(), 'src', 'i18n', '{{lng}}', '{{ns}}.json')
      : path.join(__dirname, 'i18n', '{{lng}}', '{{ns}}.json')
  },
  detection: {
    order: ['querystring', 'cookie'],
    lookupQuerystring: 'lang', // tells detector to use ?lang=
    caches: ['cookie']
  },
  fallbackLng: 'en', // correct spelling
  preload: ['en', 'es'],
  ns: ['translation'],
  defaultNS: 'translation'
};

i18next.use(Backend).use(i18nextMiddleware.LanguageDetector).init(i18nOptions);

const authenticatedUser: RequestHandler = (req, res, next) => {
  console.log('User: ', req.user);
  // res.json({ message: 'Login successful', user: req.user });
  next();
};

const getauthenticatedUser: RequestHandler = (req, res, next) => {
  console.log('User: ', req.user);
  res.json({ message: 'Login successful', user: req.user });
  // next();
};
// Enable trust proxy/ reverse proxy for secure cookies in session during production
// through X-Forwarded-Proto header set to true/1
app.set('trust-proxy', 1);

const urlType: OptionsUrlencoded | any | boolean = false;

// Third-party express middlewares
app.use(cors(corsOption));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(urlType));
app.use(cookieParser());
app.use(morgan('dev'));
// app.use(limiter);
app.use(helmet());
app.use(compression());
app.use(i18nextMiddleware.handle(i18next));

app.use('/auth', authRouter);
app.use(authenticatedUser);
app.use(ratelimitmiddleware);
app.use(getauthenticatedUser);
app.use('/lang', langRouter);

// app.use((err: any, req: Request, res: Response, next: Function) => {
//   console.error('Something broke', err);
//   next(err);
// });

/**Database connection precedes server/app listening */
if (process.env.MONGO_URI) {
  connectDB(process.env.MONGO_URI)
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
