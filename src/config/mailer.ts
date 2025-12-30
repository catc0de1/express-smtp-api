import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,

  pool: true,
  maxConnections: 3,
  maxMessages: 50,

  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },

  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
});

export default transporter;
