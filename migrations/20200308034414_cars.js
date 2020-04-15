exports.up = async function(knex) {
	await knex.schema.createTable("cars", table => {
		//   table.integer("id").notNull().unique().primary()
		table.increments("id");
		table
			.real("vin")
			.notNull()
			.unique();
		table.text("make").notNull();
		table.text("model").notNull();
		table.text("mileage").notNull();
		table.text("transmission");
		table.text("title");
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("cars");
};
