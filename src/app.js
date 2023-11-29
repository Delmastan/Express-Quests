const express = require("express");

const app = express();

app.use(express.json());

const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

// app.post("/api/movies", movieControllers.postMovie);
// app.post("/api/users", userControllers.postUser);
app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.post("/api/users", validateUser, userControllers.postUser);

// app.put("/api/movies/:id", movieControllers.updateMovie);
// app.put("/api/users/:id", userControllers.updateUser);
app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
app.put("/api/users/:id", validateUser, userControllers.updateUser);

module.exports = app;
