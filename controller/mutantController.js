const Data = require("../models/mutantModel");

// @desc   Gets all of the mutant data
// @route  GET /api/data
async function getDataAll(req, res) {
	try {
		const dataAll = await Data.findAll();

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(dataAll));
	} catch (e) {
		console.error(e);
	}
}

// @desc   Gets individual of the mutant data
// @route  GET /api/data/:id
async function getData(req, res, id) {
	try {
		console.warn("QINTA!!!!!!!!!!!!!!!!!!!!!!!");
		const data = await Data.findById(id);

		if (!data) {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end(
				JSON.stringify({ message: "Mutant not found in mutant database" })
			);
		} else {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(data));
		}
	} catch (e) {
		console.error(e);
	}
}

// @desc   creates a new mutant
// @route  POST /api/data
async function registerMutant(req, res) {
	try {
		const mutant = {
			name: "Piotr Rasputin",
			codename: "Colossus",
			powers: ["Strength"],
		};
		const newMutant = Data.create(mutant);
		res.writeHead(200, { "Content-Type": "application/json" });
		return res.end(JSON.stringify(newMutant));
	} catch (e) {
		console.error(e);
	}
}

module.exports = {
	getDataAll,
	getData,
	registerMutant,
};
