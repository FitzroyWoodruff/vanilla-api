const Data = require("../models/mutantModel");

async function getData(req, res) {
	try {
		const data = await Data.findAll();

		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(data));
	} catch (e) {
		console.error(e);
	}
}

module.exports = {
	getData,
};
