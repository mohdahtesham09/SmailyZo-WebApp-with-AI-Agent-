import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'smailyzo.db');
const db = new Database(dbPath);

console.log('Initializing database...');

// Read and execute schema
const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf-8');
db.exec(schema);

// Seed default users if empty
const userCount = db.prepare('SELECT count(*) as count FROM users').get();

if (userCount.count === 0) {
    console.log('Seeding default users...');

    const insertUser = db.prepare(`
    INSERT INTO users (email, password_hash, role, name)
    VALUES (?, ?, ?, ?)
  `);

    // Default Password: 'password123'
    // Note: bcrypt.hashSync is synchronous, fine for init script
    const hash = bcrypt.hashSync('password123', 10);

    insertUser.run('doctor@smailyzo.com', hash, 'doctor', 'Dr. Smaily');
    insertUser.run('staff@smailyzo.com', hash, 'staff', 'Sarah Staff');
    insertUser.run('patient@example.com', hash, 'patient', 'John Patient');

    console.log('Seeded Doctor, Staff, and Patient users.');
}

console.log('Database initialized successfully.');
db.close();
