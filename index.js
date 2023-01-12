const http = require("http");
const { getData } = require("./controller/mutantController");

//NOTE: mutant registration app api
const PORT = process.env.PORT || 7000;
const app = http.createServer((req, res) => {
	if (req.url === "/api/data" && req.method === "GET") {
		getData(req, res);
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ message: "You chose the wrong endpoint" }));
	}
});

app.listen(PORT, () => {
	console.log(`Mutant Registration App running on port ${PORT}`);
});
