exports.seed = async function(knex) {
	//clear out all the rows in the table when you run seeds file
	await knex("cars").truncate();
	await knex("cars").insert([
		{
			vin: 123456,
			make: "ford",
			model: "escape",
			mileage: 190000,
			transmission: "automatic",
			title: "clear"
		},
		{
			vin: 789101,
			make: "toyota",
			model: "corolla",
			mileage: 30900,
			transmission: "automatic",
			title: "clear"
		}
	]);
};
