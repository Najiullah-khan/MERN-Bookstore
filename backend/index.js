import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose'; // Corrected import statement
import bookrouter from './route/book.route.js';
import cors from 'cors';
import user from './route/user.route.js';
config()
const port = process.env.PORT ||4000;
const app = express()
const uri=process.env.mongodburi;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
  app.use(cors());
  app.use(express.json());
  //defining route
  app.use("/book",bookrouter)
  app.use("/user",user)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})