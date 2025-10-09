import 'express';

declare module 'express' {
  interface Request {
    t?: (locale: string) => void;
    translation?: Record<string, any>;
  }
}

declare module 'i18n' {
  import { RequestHandler } from 'express';
  // Default export is a function returning an express middleware
  function i18n(options: any): RequestHandler;
  export = i18n;
}
