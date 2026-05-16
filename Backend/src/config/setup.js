//admin related setup
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import session from 'express-session';
import ConnectMongoDBSession from 'connect-mongodb-session';
import Product from '../models/product.model.js';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { dark, light, noSidebar } from '@adminjs/themes';
import Category from '../models/category.model.js';
import Order from '../models/order.model.js';
import User from '../models/user.model.js';
import Transaction from '../models/transaction.model.js';
import { COOKIE_PASSWORD, MONGO_URI } from './config.js';
import { promises as dns } from 'node:dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

AdminJS.registerAdapter(AdminJSMongoose);

const DEFAULT_ADMIN = {
 email: "rohanrawat7508@gmail.com",
 password: "Admin@123"
}

const authenticate = async (email, password) => {
 if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
  return Promise.resolve(DEFAULT_ADMIN);
 }
 return null;
}

export const buildAdminJS = async (app) => {
 const admin = new AdminJS({
  resources: [
   { resource: Product },
   { resource: Category },
   { resource: Order },
   { resource: User },
   { resource: Transaction },
  ],
  branding:{
   company: 'Ekart',
   withMadeWithLove: false,
   favicon: "https://i.postimg.cc/ZRCCXLgg/temp-Imagef-Coi-ZY.avif",
   logo: "https://i.postimg.cc/ZRCCXLgg/temp-Imagef-Coi-ZY.avif",
  },
  defaultTheme: dark.id,
  availableThemes:[dark, light, noSidebar],
  rootPath: "/admin"
 })

 const MongoDBStore = ConnectMongoDBSession(session);
 const sessionStore = new MongoDBStore({
  uri: MONGO_URI,
  collection: 'sessions'
 })

 const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
   authenticate,
   cookieName:'adminjs',
   cookiePassword: COOKIE_PASSWORD
  },
  null,
  {
   store: sessionStore,
   resave:true,
   saveUninitialized: true,
   secret: COOKIE_PASSWORD,
   cookie: {
    httpOnly: process.env.NODE_ENV === "production",
    secure: process.env.NODE_ENV === "production",
   }
  }
 );

 app.use(admin.options.rootPath, adminRouter)
}