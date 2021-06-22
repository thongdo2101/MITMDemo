var express = require("express");
var cors = require("cors")
var fs = require("fs");

var app = express();

app.use(cors())
app.use(express.static("static"))

app.post("/victims", (req, res, next) => {
    console.log(req.body)
    res.send("got you!!!")
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
