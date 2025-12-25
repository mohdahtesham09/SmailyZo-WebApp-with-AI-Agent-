import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
import authRoutes from './routes/authRoutes.js';

// API Routes
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'SmailyZo Secure Backend is running' });
});

// Serve static assets in production (optional, currently relying on Vite dev server)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
