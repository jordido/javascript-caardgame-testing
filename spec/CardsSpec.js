function whoWins(hand1,hand2) {
  var points1 = 0;
  var points2 = 0;
  if (!hand1 || !hand2) {
    throw("Error, there are no cards to judge.");
  } else if (!hand1[0] || !hand2[0]) {
    throw("Error, there are no cards to judge.");
  } 
  if (hand2[0] > hand1[0]) {
    points2 += 1;
  } else if (hand2[0] < hand1[0]) {
    points1 += 1;
  }; 
  if (hand2[1] > hand1[1]) {
    points2 += 1;
  } else if (hand2[1] < hand1[1]) {
    points1 += 1;
  };
  if (points2 > points1) {
     return ("Player 2 wins "+ points2 +" to "+ points1);
   } else if (points2 < points1) {
      return ("Player 1 wins "+ points1 +" to "+ points2);
   } else {
    return "Tie";
  };


};

describe("Game of Cards", function() {

  it("wins with one card hand", function(){
    expect(whoWins(['1'],['2'])).toEqual("Player 2 wins 1 to 0");
    expect(whoWins(['2'],['1'])).toEqual("Player 1 wins 1 to 0");
  });

  it("should return tie", function() {
    expect(whoWins(["1"],["1"])).toEqual("Tie");
    expect(whoWins(["2","1"],["1","2"])).toEqual("Tie");
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

