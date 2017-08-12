var path = require("path");

module.exports = function (app) {

	// Basic route that sends the user first to the home Page
	app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	//route sends user to the survey page
	app.use(function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
}