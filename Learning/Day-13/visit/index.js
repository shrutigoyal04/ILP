const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
    url: "redis://redis_server:6379"
});
(async () => {
  await client.connect();
  await client.set("visits", 0);
})();

app.get("/", async (req, res) => {
  try {
    const visits = await client.get("visits");
    res.send("Number of visits is " + visits);
    await client.set("visits", parseInt(visits) + 1);
  } catch (err) {
    res.status(500).send("Redis error: " + err.message);
  }
});

app.get("/error0", (req, res) => {
    process.exit(0);
});

app.get("/error1", (req, res) => {
    process.exit(1);
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});