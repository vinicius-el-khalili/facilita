-- Create types
CREATE TYPE Client AS (
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20),
    x VARCHAR(20),
    y VARCHAR(20)
)

-- Create table
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    details Client
);

-- Insert sample data
INSERT INTO clients (details)
VALUES (
    ROW(
        'Jeff',
        'jeff@mail.com',
        '5500912391234',
        '1.27',
        '4.12'
    )
)
