import sqlite3

connection = sqlite3.connect('database.db')

with open('schema.sql', 'w') as f:
    f.write('''
DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
''')

with open('schema.sql') as f:
    connection.executescript(f.read())

connection.commit()
connection.close()

print("Database initialized successfully.")
