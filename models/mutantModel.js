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

function update(mid, mutant) {
	return new Promise((resolve, reject) => {
		const index = data.findIndex((d) => d.mid === mid);
		data[index] = { mid, ...mutant };
		try {
			writeDataToFile("./fakeData/data.json", data);
			console.log(`${TAG} Data was written to file...`);
		} catch (error) {
			console.log(`${TAG} ${error}`);
		}
		resolve(data[index]);
	});
}

function remove(mid) {
	return new Promise((resolve, reject) => {
		data = data.filter((d) => d.mid === mid);
		try {
			writeDataToFile("./fakeData/data.json", data);
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
