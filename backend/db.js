const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const dbPath = path.join(__dirname, "notes.db");
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("❌ Failed to connect to DB:", err.message);
  } else {
    console.log("✅ Connected to SQLite database");
  }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title Text,
        content Text,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `);
});

module.exports = db;


