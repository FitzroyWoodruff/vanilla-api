const Data = require("../models/mutantModel");

const { getMutantData } = require("../utils/utils");

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
		const body = await getMutantData(req);

		const { name, codename, powers } = JSON.parse(body);

		const mutant = {
			name,
			codename,
			powers,
		};

		const newMutant = await Data.create(mutant);
		res.writeHead(200, { "Content-Type": "application/json" });
		return res.end(JSON.stringify(newMutant));
	} catch (error) {
		console.error(error);
	}
}

// @desc   Update an existing mutant
// @route  PUT/api/data/:id
async function updateMutant(req, res, id) {
	try {
		const data = await Data.findById(id);

		if (!mutant) {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end(
				JSON.stringify({ message: "Mutant not found in mutant database" })
			);
		} else {
			const body = await getMutantData(req);

			const { name, codename, powers } = JSON.parse(body);

			const mutantData = {
				name: name || data.name,
				codename: codename || data.codename,
				powers: powers || data.powers,
			};

			const updatedMutant = await Data.update(id, mutantData);
			res.writeHead(200, { "Content-Type": "application/json" });
			return res.end(JSON.stringify(updatedMutant));
		}
	} catch (error) {
		console.error(error);
	}
}

// @desc   delete an existing mutant
// @route  DELETE /api/data/:id
async function deleteMutant(req, res, id) {
	try {
		const data = await Data.findById(id);

		if (!data) {
			res.writeHead(404, { "Content-Type": "application/json" });
			res.end(
				JSON.stringify({ message: "Mutant not found in mutant database" })
			);
		} else {
			await Data.remove(id);

			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: `Mutant ${id} was deleted` }));
		}
	} catch (error) {
		console.error(error);
	}
}

module.exports = {
	getDataAll,
	getData,
	registerMutant,
	updateMutant,
	deleteMutant,
};
