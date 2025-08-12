import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import flash from 'connect-flash';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import ConnectMongoDBSession from 'connect-mongodb-session';

const app = express();
const DEV_PORT = 3110;

const PORT = process.env.PORT || DEV_PORT;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',');

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
// Enable trust proxy/ reverse proxy for secure cookies in session during production
// through X-Forwarded-Proto header set to true/1
app.set('trust-proxy', 1);

app.use(cors(corsOption));
app.use(session(sessionOptions));
app.use(morgan('dev'));
app.use(limiter);

app.listen(() => {
  console.log(`Server is running on port ${PORT}`);
});
