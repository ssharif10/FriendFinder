var friendsData = require("../data/friends.js");

module.exports = function (app) {

	app.get("/api/friends", function (req, res) {
		res.json(friendsData);
	});

		// posting new data from the server
    app.post("/api/friends", function(req, res) {

        // Store the user's input from survey page to a variable
        var newFriendData = req.body;
        console.log("newFriendData = " + JSON.stringify(newFriendData));

        var userScores = newFriendData.scores;
        console.log("userScores = " + userScores);        

		//declare match name and match image to a variable
    	var closestMatchName = "";
    	var closestMatchImg = "";
    	var scoreScale = 100;

        // Looping through our friendsData array
        for (var i = 0; i < friendsData.length; i++) {
        	var variance = 0;
            // Loop through the scores of each question for both the new user as well as existing friends and compute their variance with an absolute difference value
            for (var a= 0; a < userScores.length; a++) {
                variance += Math.abs(friendsData[i].scores[a] - userScores[a]);
            }
            console.log("variance = " + variance);

            // Determine the lowest variance by setting scoreScale equal to variance - The lowest variance will remain and that index will be applied to the matchName and matchIMG  
            if (variance < scoreScale) {

                scoreScale = variance;
                closestMatchName = friendsData[i].name;
                closestMatchImg = friendsData[i].photo;
            }
        }

        // Add new user to our friendsList
        friendsData.push(newFriendData);

        // Send response to our display modal page
        res.json({status: "OK", closestMatchName: closestMatchName, closestMatchImg: closestMatchImg});
    });

}