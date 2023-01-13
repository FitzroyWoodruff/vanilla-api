const data = require("../fakeData/data.json");
const { v4: uuidv4 } = require("uuid");

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

module.exports = {
	findAll,
	findById,
};
