import express from "express";
import pg from "pg";
import cors from "cors";
import path from "path";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blogs",
  password: "postgres",
  port: 5432,
});

db.connect()
  .then(() => console.log("Database Connected ✅"))
  .catch(err => console.log(err));



app.get("/", (req, res) => {
  res.send("Server working ✅");
});

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

app.get("/posts", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM posts ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching posts");
  }
});

app.post("/posts", async (req, res) => {
    console.log("POST request received", req.body);
  try {
    const { title, content, author, image_url } = req.body;

    const result = await db.query(
      `INSERT INTO posts (title, content, author, image_url)
       VALUES ($1,$2,$3,$4) RETURNING *`,
      [title, content, author, image_url]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving post");
  }
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});