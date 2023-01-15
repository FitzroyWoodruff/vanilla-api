const data = require("../fakeData/data.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils/utils");

const TAG = "Mutant Model:";

function findAll() {
	return new Promise((resolve, reject) => {
		resolve(data);
	});
}
function findById(id) {
	return new Promise((resolve, reject) => {
		const mutant = data.find((d) => d.mid === id);
		resolve(mutant);
	});
}
function create(mutant) {
	return new Promise((resolve, reject) => {
		const newMutant = { mid: uuidv4(), ...mutant };
		data.push(newMutant);
		try {
			writeDataToFile("./fakeData/data.json", data);
			console.log(`${TAG} Data was written to file...`);
		} catch (error) {
			console.log(`${TAG} ${error}`);
		}
		resolve(newMutant);
	});
}

function update(id, mutant) {
	return new Promise((resolve, reject) => {
		const index = data.findIndex((d) => d.mid === id);
		data[index] = { id, ...mutant };
		try {
			writeDataToFile("./fakeData/data.json", data);
			console.log(`${TAG} Data was updated written to file...`);
		} catch (error) {
			console.log(`${TAG} ${error}`);
		}
		resolve(data[index]);
	});
}

function remove(id) {
	return new Promise((resolve, reject) => {
		const dataf = data.filter((d) => d.mid !== id);
		console.log(dataf);
		try {
			writeDataToFile("./fakeData/data.json", dataf);
			console.log(`${TAG} Data was removed from file...`);
		} catch (error) {
			console.log(`${TAG} ${error}`);
		}
		resolve();
	});
}

module.exports = {
	findAll,
	findById,
	create,
	update,
	remove,
};
