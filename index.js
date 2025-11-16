import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

app.listen(3000, () =>
  console.log('API running on http://localhost:3000')
);