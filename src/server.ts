import * as express from "express";

const app = express();

// Routes:
app.get("/", require("./routes/base").get);

app.listen(8080, function () {
  console.log("🚀 server listening on :8080");
}); // the server object listens on port 8080
