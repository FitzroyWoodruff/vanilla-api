const data = require("../fakeData/data.json");

function findAll() {
	return new Promise((resolve, reject) => {
		resolve(data);
	});
}

module.exports = {
	findAll,
};
