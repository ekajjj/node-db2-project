const express = require("express");

const server = express();
const carsRoute = require("./data/cars/carsRouter.js");

server.use(express.json());
server.use("/api/cars", carsRoute);

server.get("/", (req, res) => {
	res.send(`<h2>Yeah! It works!</h2>`);
});

module.exports = server;
