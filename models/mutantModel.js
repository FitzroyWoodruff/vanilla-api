const data = require("../fakeData/data.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils/utils");

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
			console.log(" 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍");
		} catch (e) {
			console.log(" 👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎 ");
		}
		resolve(newMutant);
	});
}

module.exports = {
	findAll,
	findById,
	create,
};
