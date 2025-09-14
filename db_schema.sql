-- Simple Postgres schema for Smart Agri Assistant (starter)
CREATE TABLE farmers (
  id SERIAL PRIMARY KEY,
  name TEXT,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE detections (
  id SERIAL PRIMARY KEY,
  farmer_id INTEGER REFERENCES farmers(id),
  image_url TEXT,
  disease TEXT,
  confidence REAL,
  weather_json JSONB,
  soil_json JSONB,
  recommended_json JSONB,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE fertilizers (
  id SERIAL PRIMARY KEY,
  name TEXT,
  brand TEXT,
  dosage TEXT,
  organic_alternative TEXT,
  price NUMERIC,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE subsidy_schemes (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES fertilizers(id),
  region TEXT,
  subsidy_percent INTEGER,
  scheme_code TEXT,
  valid_until DATE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  farmer_id INTEGER REFERENCES farmers(id),
  product_id INTEGER REFERENCES fertilizers(id),
  price NUMERIC,
  subsidy_applied BOOLEAN DEFAULT false,
  invoice_url TEXT,
  status TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE chat_history (
  id SERIAL PRIMARY KEY,
  farmer_id INTEGER REFERENCES farmers(id),
  conversation JSONB,
  created_at TIMESTAMP DEFAULT now()
);
