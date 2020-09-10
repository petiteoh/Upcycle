const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const categories = require("./routes/api/categories");
const upcycles = require("./routes/api/upcycles");
const bodyParser = require("body-parser");
const path = require("path");
const upload = require("./routes/api/uploads");
const passport = require('passport');
require('./config/passport')(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  })
}

mongoose.Promise = global.Promise;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {res.send("Hello Team!")});

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/categories", categories);
app.use("/api/upcycles", upcycles);

app.use("/api/uploads", upload);
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


// AWS route

// // TEST // DISPLAY ALL ROUTES
// function print(path, layer) {
//   if (layer.route) {
//     layer.route.stack.forEach(
//       print.bind(null, path.concat(split(layer.route.path)))
//     );
//   } else if (layer.name === "router" && layer.handle.stack) {
//     layer.handle.stack.forEach(
//       print.bind(null, path.concat(split(layer.regexp)))
//     );
//   } else if (layer.method) {
//     console.log(
//       "%s /%s",
//       layer.method.toUpperCase(),
//       path.concat(split(layer.regexp)).filter(Boolean).join("/")
//     );
//   }
// }

// function split(thing) {
//   if (typeof thing === "string") {
//     return thing.split("/");
//   } else if (thing.fast_slash) {
//     return "";
//   } else {
//     var match = thing
//       .toString()
//       .replace("\\/?", "")
//       .replace("(?=\\/|$)", "$")
//       .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
//     return match
//       ? match[1].replace(/\\(.)/g, "$1").split("/")
//       : "<complex:" + thing.toString() + ">";
//   }
// }

// app._router.stack.forEach(print.bind(null, []));
// // TEST