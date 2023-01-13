const fs = require("fs");

function writeDataToFile(filename, content) {
	fs.writeFileSync(filename, JSON.stringify(content), "utf8", (error) => {
		console.log("RUNNING: " + filename);
		if (error) console.warn(error);
	});
}

module.exports = {
	writeDataToFile,
};
