import 'express';

declare global {
  namespace Express {
    // Extend the built-in Express.User type
    interface User {
      _id: any;
      email: string;
      username: string;
      // add anything else you attach (roles, name, etc.)
    }

    // You can also extend SessionData if you store user there
    interface SessionData {
      user?: User;
      authenticated?: boolean;
    }
  }
}
