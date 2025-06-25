const express = require("express");
const redis = require("redis");
const cors = require("cors");

const app = express();
app.use(cors());

const client = redis.createClient({
  url: "redis://redis:6379"
});

client.connect().catch(console.error);

app.get("/api/visit", async (req, res) => {
  try {
    const visits = await client.incr("visits");
    res.json({ visits });
  } catch (err) {
    console.error("Error in /api/visit:", err.message);
    res.status(500).send("Redis error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


