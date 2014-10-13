function whoWins(hand1,hand2) {

function displayResult (points1,points2) {

  if (points2 > points1) {
     return ("Player 2 wins "+ points2 +" to "+ points1);
   } else if (points2 < points1) {
      return ("Player 1 wins "+ points1 +" to "+ points2);
   } else {
    return "Tie";
  };
}

function controlErrors(hand1,hand2) {
  if (!hand1 || !hand2) {
    throw("Error, there are no cards to judge.");
  } else if (!hand1[0] || !hand2[0]) {
    throw("Error, there are no cards to judge.");
  }; 
}


function checkPoints(card1,card2) {
    if (cardsRanking.indexOf(card2) > cardsRanking.indexOf(card1)) {
      ++points2;
    } else if (cardsRanking.indexOf(card2) < cardsRanking.indexOf(card1)) {
      ++points1;
    }; 
}




  controlErrors(hand1,hand2);

  var cardsRanking = "123456789JQK";

  var points1 = 0;
  var points2 = 0;
  var i;

  for (i=0 ; i < hand1.length; i++) { 
    checkPoints(hand1[i],hand2[i]);
    }; 
  

  return displayResult(points1,points2);

};


describe("Game of Cards", function() {

  it("wins with one card hand", function(){
    expect(whoWins(['1'],['Q'])).toEqual("Player 2 wins 1 to 0");
    expect(whoWins(['2'],['1'])).toEqual("Player 1 wins 1 to 0");
    expect(whoWins(['K'],['Q'])).toEqual("Player 1 wins 1 to 0");
  });

  it("should return tie", function() {
    expect(whoWins(["1"],["1"])).toEqual("Tie");
    expect(whoWins(["2","J"],["1","Q"])).toEqual("Tie");
  });

  it("should win with 2 cards", function(){
    expect(whoWins(['1','2'],['2','3'])).toEqual("Player 2 wins 2 to 0");
    expect(whoWins(['2','3'],['1','2'])).toEqual("Player 1 wins 2 to 0");
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

