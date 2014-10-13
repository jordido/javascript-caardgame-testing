function whoWins(hand) {

  var cardsRanking = "123456789JQK";
  var points = [];
  var i;

  controlErrors(hand);

  var numberofplayers = hand.length;
  var numberofrounds = hand[0].length;

  initializeArrayOfPoints();

  for (r=0 ; r < numberofrounds; r++) { 
    addPointsToWinner(buildRound(r));
  }; 

  return finalResult(points);

  function initializeArrayOfPoints() {
    for (i=0; i<numberofplayers; i++) {
      points.push(0);
    }
  }

  function buildRound(round) {
    cardsinround = [];
    for (player=0; player < numberofplayers; player++) {
      cardsinround.push(hand[player][round]);
    }
    return cardsinround;
  }

  function finalResult(points) {
    stringResult = "Players: ";
    for (i=0; i<points.length; i++){
      stringResult += (i+1) + "=>"+ points[i] + " points ";
    }
    return stringResult;
  }

  function addPointsToWinner(cards) {
    var max = 0;
    for (i=1; (i < (cards.length)); i++) {
      if (cardsRanking.indexOf(cards[i]) == cardsRanking.indexOf(cards[max])){
        return;
      } else {
          if (cardsRanking.indexOf(cards[i]) > cardsRanking.indexOf(cards[max])){
          max = i;
          }
      }
    }
    ++points[max];  
  }

  function controlErrors(hand) {
    if ((!hand) || !(hand instanceof Array) || (hand.length == 0)){
      throw("Error, there are no cards to judge.");
    }; 
    for (i=0; i<hand.length; i++) {
      if (!(hand[i] instanceof Array) || !hand[i] || (hand[i].length == 0)) {
        throw("Error, there are no cards to judge.");
      } else {
        if (hand[i].length != hand[0].length) {
          throw("Error, different number of cards for players.");
        } else {
          for (c=0; c < hand[i].length; c++) {
            if (cardsRanking.indexOf(hand[i][c]) == -1) 
              {throw("Error, Incorrect card in hand");}
          }
        }
      }
    }
  }
};



describe("Game of Cards", function() {

  it("wins with one card hand", function(){
    expect(whoWins([['1'],['Q']])).toEqual("Players: 1=>0 points 2=>1 points ");
  });
  it("wins with one card hand second case", function(){
    expect(whoWins([['2'],['1']])).toEqual("Players: 1=>1 points 2=>0 points ");
  });
  it("wins with one card hand third case", function(){
    expect(whoWins([['K'],['Q']])).toEqual("Players: 1=>1 points 2=>0 points ");
  });

  it("should return tie", function() {
    expect(whoWins([["1"],["1"]])).toEqual("Players: 1=>0 points 2=>0 points ");
    expect(whoWins([["2","J"],["1","Q"]])).toEqual("Players: 1=>1 points 2=>1 points ");
  });

  it("should win with 2 cards", function(){
    expect(whoWins([['1','2'],['2','3']])).toEqual("Players: 1=>0 points 2=>2 points ");
    expect(whoWins([['2','3'],['1','2']])).toEqual("Players: 1=>2 points 2=>0 points ");
  });

  it("wins with three players and 1 card", function(){
    expect(whoWins([['1'],['Q'],['1']])).toEqual("Players: 1=>0 points 2=>1 points 3=>0 points ");
    expect(whoWins([['K'],['Q'],['1']])).toEqual("Players: 1=>1 points 2=>0 points 3=>0 points ");
    expect(whoWins([['1'],['2'],['K']])).toEqual("Players: 1=>0 points 2=>0 points 3=>1 points ");
  });

  it("wins with three players and 2 cards", function(){
    expect(whoWins([['1','J'],['Q','K'],['1','9']])).toEqual("Players: 1=>0 points 2=>2 points 3=>0 points ");
    expect(whoWins([['K','9'],['Q','9'],['1','9']])).toEqual("Players: 1=>1 points 2=>0 points 3=>0 points ");
    expect(whoWins([['9','1'],['2','5'],['8','K']])).toEqual("Players: 1=>1 points 2=>0 points 3=>1 points ");
  });

  it('Should return an error if there are no cards in the hands', function(){
    expect(function(){whoWins()}).toThrow('Error, there are no cards to judge.');
    expect(function(){whoWins([],[])}).toThrow('Error, there are no cards to judge.');
    expect(function(){whoWins(null,null)}).toThrow('Error, there are no cards to judge.');
    expect(function(){whoWins([['1'],[]])}).toThrow('Error, there are no cards to judge.');
  });

  it('Should return an error if there are no uqual number of cards for players', function(){
    expect(function(){whoWins([['1'],['1','2']])}).toThrow("Error, different number of cards for players."); 
  });

  it('Should return an error when one card is not correct', function(){
    expect(function(){whoWins([['1','K'],['10','2']])}).toThrow("Error, Incorrect card in hand"); 
  });
});
