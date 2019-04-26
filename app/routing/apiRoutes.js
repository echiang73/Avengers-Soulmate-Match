var superheroesData = require("../data/superheroesData");

// ROUTING
module.exports = function (app) {
  app.get("/api/superheroes", function (req, res) {
    res.json(superheroesData);
  });

  app.post("/api/superheroes", function (req, res) {
    // superheroesData.push(req.body);

    // Our user is the data sent in the request.
    var thisUser = req.body;
    var differences = [];
    console.log(thisUser);
    // console.log(thisUser.scores);

    // Step through these potential superheroes.
    superheroesData.forEach(function (user) {
      var totalDifference = 0;
      
      // For each answer, compare the answers and add the absolute value of the difference to the total difference.
      for (var i = 0; i < thisUser.scores.length; i++) {
        var otherAnswer = user.scores[i];
        var thisAnswer = thisUser.scores[i];
        var eachDifference = otherAnswer - thisAnswer;
        totalDifference += Math.abs(eachDifference); // Take just absolute difference!
        // console.log(otherAnswer);
        // console.log(thisAnswer);
      }

      differences.push(totalDifference);
    });
    
    console.log("Here are the differences between you and all the others: " + differences);

    // // Find the minimum difference score.
    var minimumDifference = Math.min.apply(null, differences); // Use .apply in Math.min.apply to find min or a variable ARRAY!

    // // Since there may be more than one potential friend with that score, create an array.
    var bestMatches = [];

    // // For each item in differences, if it is equal to the minimumDifference, add the corresponding friendData to the bestMatches array.
    for (var i = 0; i < differences.length; i++) {
      if (differences[i] === minimumDifference) {
        bestMatches.push(superheroesData[i]);
      }
    }

    // // Then send bestMatches to the client.
    // res.json(bestMatches);
    console.log("Mim Diff: " + minimumDifference);

    for (var i = 0; i < bestMatches.length; i++) {
      console.log("Best Match(s): " + bestMatches[i].userName);
    }

    // Once you're done comparing, add the new user to the potential friends data.
    superheroesData.push(thisUser);
  });
};
