import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'secret-inesic';
