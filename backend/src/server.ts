import express from 'express';
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
import i18n from 'i18n-express';
import path from 'path';

import authRouter from './routes/authRoutes';

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

const i18nOptions: any = {
  // translationsPath: path.join(process.cwd(), 'backend', 'src', 'i18n'),
  translationsPath: path.join(__dirname, 'i18n'), // path.resolve(__dirname, '../src/i18n'),
  siteLangs: ['en', 'es'],
  textsVarName: 'translation'
};

// Enable trust proxy/ reverse proxy for secure cookies in session during production
// through X-Forwarded-Proto header set to true/1
app.set('trust-proxy', 1);

const urlType: OptionsUrlencoded | any | boolean = false;

app.use(cors(corsOption));
app.use(session(sessionOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(urlType));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(limiter);
// app.use(helmet());
app.use(compression());

app.use(i18n(i18nOptions));

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
