const express = require("express");

const db = require("../config.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const cars = await db.select("*").from("cars");
		res.json(cars);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const payload = {
			vin: req.body.vin,
			make: req.body.make,
			model: req.body.model,
			mileage: req.body.mileage,
			transmission: req.body.transmission,
			title: req.body.title
		};

		const [id] = await db.insert(payload).into("cars");
		const newCar = await db("cars")
			.where("id", id)
			.first();
		res.json(newCar);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
