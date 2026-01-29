const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/", (req, res) => {
  db.all("SELECT * FROM notes ORDER BY id DESC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});


router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  db.run(
    "INSERT INTO notes (title, content) VALUES (?, ?)",
    [title, content],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({
        id: this.lastID,
        title,
        content
      });
    }
  );
});


router.put("/:id", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }
  
  db.run(
    "UPDATE notes SET title = ?, content = ? WHERE id = ?",
    [title, content, req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        id: Number(req.params.id),
        title,
        content
      });
    }
  );
});


router.delete("/:id", (req, res) => {
  db.run(
    "DELETE FROM notes WHERE id = ?",
    [req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.sendStatus(200);
    }
  );
});

module.exports = router;
