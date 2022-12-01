import { initializeApp } from "firebase/app";

/**
 * Firebase app is initialized here.
 *
 */

// Set configuration data to Firebase
// All the data used here stored in the `next.config.js` file.
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

export default app;
