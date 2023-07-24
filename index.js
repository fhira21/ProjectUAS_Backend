import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

mongoose.connect('mongodb+srv://fhiramaulani2105:Ftm210503_@cluster0.w4htdpk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

const allowedOrigins = ['http://example1.com', 'http://example2.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origin tidak diizinkan oleh CORS'));
    }
  },
  allowedHeaders: ['X-Requested-With', 'Content-Type', 'Authorization'],
  allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log('Server up and running...'));
