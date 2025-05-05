import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' Successfully connected to MongoDB database ');
    app.listen(process.env.PORT, () => console.log(` Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.log(' MongoDB connection error:', err));
