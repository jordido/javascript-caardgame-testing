function whoWins(hand) {

  var cardsRanking = "123456789JQK";
  var points = [0,0];
  var i;

  controlErrors(hand);

  for (i=0 ; i < hand[0].length; i++) { 
    addPoints(hand[0][i],hand[1][i]);
    }; 
  return finalResult(points);


  function finalResult (points) {
    console.log(points[0]);
    console.log(points[1]);
    if (points[1] > points[0]) {
        return ("Player 2 wins "+ points[1] +" to "+ points[0]);
     } else if (points[1] < points[0]) {
        return ("Player 1 wins "+ points[0] +" to "+ points[1]);
     } else {
      return "Tie";
    };
  }

  function controlErrors(hand) {
    if (!hand) {
      throw("Error, there are no cards to judge.");
    } else if (!hand[0] || !hand[1]) {
      throw("Error, there are no cards to judge.");
    }; 
  }


  function addPoints(card1,card2) {
    if (cardsRanking.indexOf(card2) > cardsRanking.indexOf(card1)) {
      ++points[1];
    } else if (cardsRanking.indexOf(card2) < cardsRanking.indexOf(card1)) {
      ++points[0];
    }; 
  }

};


describe("Game of Cards", function() {

  it("wins with one card hand", function(){
    expect(whoWins([['1'],['Q']])).toEqual("Player 2 wins 1 to 0");
    expect(whoWins([['2'],['1']])).toEqual("Player 1 wins 1 to 0");
    expect(whoWins([['K'],['Q']])).toEqual("Player 1 wins 1 to 0");
  });

  it("should return tie", function() {
    expect(whoWins([["1"],["1"]])).toEqual("Tie");
    expect(whoWins([["2","J"],["1","Q"]])).toEqual("Tie");
  });

  it("should win with 2 cards", function(){
    expect(whoWins([['1','2'],['2','3']])).toEqual("Player 2 wins 2 to 0");
    expect(whoWins([['2','3'],['1','2']])).toEqual("Player 1 wins 2 to 0");
  });

  it('Should return an error if there are no cards in the hands', function(){
    expect(function(){
      whoWins([],[])
    }).toThrow('Error, there are no cards to judge.');
    expect(function(){
      whoWins(null,null)
    }).toThrow('Error, there are no cards to judge.');
  });

});

