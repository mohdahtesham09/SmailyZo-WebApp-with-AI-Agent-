-- Enable foreign keys
PRAGMA foreign_keys = ON;

-- Users table (Role Based)
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT CHECK( role IN ('doctor', 'staff', 'patient') ) NOT NULL,
  name TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER, -- Nullable for guest bookings or link to registered patient
  doctor_id INTEGER NOT NULL,
  guest_details TEXT, -- JSON string for guest name/email/phone if not registered
  date TEXT NOT NULL, -- YYYY-MM-DD
  time TEXT NOT NULL, -- HH:MM (24h)
  status TEXT CHECK( status IN ('pending', 'confirmed', 'completed', 'cancelled') ) DEFAULT 'pending',
  source TEXT CHECK( source IN ('web', 'chatbot', 'manual') ) DEFAULT 'web',
  payment_status TEXT CHECK( payment_status IN ('pending', 'paid', 'refunded') ) DEFAULT 'pending',
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES users(id),
  FOREIGN KEY (doctor_id) REFERENCES users(id)
);

-- Doctor Availability
CREATE TABLE IF NOT EXISTS availability (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  doctor_id INTEGER NOT NULL,
  day_of_week INTEGER NOT NULL, -- 0-6 (Sun-Sat)
  start_time TEXT NOT NULL, -- HH:MM
  end_time TEXT NOT NULL, -- HH:MM
  is_active BOOLEAN DEFAULT 1,
  FOREIGN KEY (doctor_id) REFERENCES users(id)
);

-- Leads (Potential patients from Chatbot/Web not yet booked)
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  source TEXT DEFAULT 'web',
  status TEXT DEFAULT 'new',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
