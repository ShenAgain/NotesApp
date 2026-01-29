const express = require("express");
const cors = require("cors");
const notesRoutes = require("./routes/notes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/notes", notesRoutes);

app.listen(3000, () => {
    console.log("Server running very fast like Sonic on http://localhost:3000");
});

