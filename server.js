const express = require ("express");
const path = require ("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("static"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/test1", (req, res) => {
  res.render("test1");
})

const server = app.listen(process.env.PORT || 5000 );
const portNumber = server.address().port;
console.log(`я хочу пойти домой: ${portNumber}`);
