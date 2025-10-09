import { Strategy as LocalStrategy } from 'passport-local';

import User from '../models/User';

import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
// import User from '../models/User'; // your User model

// export const configureLocalPassport = () => {
//   passport.use(
//     new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
//       try {
//         const user = await User.findOne({ email });
//         if (!user) return done(null, false, { message: 'Invalid credentials' });

//         const isMatch = await user.comparePassword(password); // implement comparePassword
//         if (!isMatch) return done(null, false, { message: 'Invalid credentials' });

//         return done(null, user);
//       } catch (err) {
//         return done(err);
//       }
//     })
//   );

//   // 🔑 Store user.id in session
//   passport.serializeUser((user: any, done) => {
//     done(null, user.id);
//   });

//   // 🔑 Fetch user from DB on every request
//   passport.deserializeUser(async (id: string, done) => {
//     try {
//       const user = await User.findById(id);
//       done(null, user);
//     } catch (err) {
//       done(err);
//     }
//   });
// };

export const configureLocalPassport = (passport: any) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password'
      },
      async (username: string, password: any, done: any) => {
        try {
          const user = await User.findOne({ username });
          if (!user) {
            return done(null, false, { message: 'No subscriber found' });
          }

          const isValid = await user.comparePassword(password);
          if (!isValid) {
            return done(null, false, { message: 'Incorrect password' });
          }

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.use(
    passport.serializeUser((user: any, done: any) => {
      done(null, user.id); // or user._id depending on your DB
      // console.log(user.id)
    }),

    passport.deserializeUser(async (id: any, done: any) => {
      try {
        const user = await User.findById(id); // or your user model
        done(null, user);
        // console.log("serialized", user)
      } catch (err) {
        done(err);
      }
    })
  );
};
