import dotenv from "dotenv";
dotenv.config();

const bkashConfig = {
  base_url : 'https://tokenized.pay.bka.sh/v1.2.0-beta',
  username: '01860064313',
  password: 'V*>nP@^+0xZ',
  app_key: '5d7qdm9Rww5J7rHyAsTRfyt8tc',
  app_secret: 'sVimmE351tEwphALWLnPFrLzPrTdxDGLFuCAMbbWs3Vy9iXQLMyF'
 };
 export default bkashConfig;


//  This will Be Your Real Credentials Comes From .env file

//  const bkashConfig = {
//  base_url : 'https://tokenized.pay.bka.sh/v1.2.0-beta',
//  username: 'your_bkash_username',
//  password: 'your_bkash_password',
//  app_key: 'your_bkash_app_key',
//  app_secret: 'your_bkash_app_secret'
// }


// const bkashConfig = {
//   base_url : 'https://tokenized.sandbox.bka.sh/v1.2.0-beta',
//   username: process.env.username,
//   password: process.env.password,
//   app_key: process.env.app_key,
//   app_secret: process.env.app_secret
//  };