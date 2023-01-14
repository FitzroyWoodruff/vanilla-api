const fs = require("fs");

function writeDataToFile(filename, content) {
	fs.writeFileSync(filename, JSON.stringify(content), "utf8", (error) => {
		console.log("RUNNING: " + filename);
		if (error) console.warn(error);
	});
}

function getMutantData(req) {
	return new Promise((resolve, reject) => {
		try {
			let body = "";
			req.on("data", (chunk) => {
				body += chunk.toString();
			});
			req.on("end", () => {
				resolve(body);
			});
		} catch (error) {
			reject(error);
		}
	});
}

module.exports = {
	writeDataToFile,
	getMutantData,
};
