const http = require("http");
const {
	getDataAll,
	getData,
	registerMutant,
} = require("./controller/mutantController");

//NOTE: mutant registration app api
const PORT = process.env.PORT || 7000;
const app = http.createServer((req, res) => {
	if (req.url === "/api/data" && req.method === "GET") {
		getDataAll(req, res);
	} else if (req.url.match(/\/api\/data\/([0-9]+)/) && req.method === "GET") {
		console.error("gandolf!!!!");
		const id = req.url.split("/")[3];
		getData(req, res, id);
	} else if (req.url === "/api/data" && req.method === "POST") {
		registerMutant(req, res);
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ message: "You chose the wrong endpoint" }));
	}
});

app.listen(PORT, () => {
	console.log(`Mutant Registration App running on port ${PORT}`);
});
