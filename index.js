const http = require("http");
const data = require("./fakeData/data.json");

//NOTE: mutant registration app api
const PORT = process.env.PORT || 7000;
const app = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(data));
});

app.listen(PORT, () => {
	console.log(`Mutant Registration App running on port ${PORT}`);
});
