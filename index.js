import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://fhiramaulani2105:Ftm210503_@cluster0.w4htdpk.mongodb.net/mydatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database Connected...'))
.catch((error) => console.log(error));

const allowedOrigins = ['https://project-uas-backend.vercel.app', 'https://project-uas-frontend-dun.vercel.app', 'http://localhost:3000'];

const corsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));
app.use(express.json());

// Use the UserRoute middleware
app.use(UserRoute);
app.use(authRoutes);

app.listen(5000, () => console.log('Server up and running on port 5000...'));
