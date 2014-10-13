function whoWins(hand) {

  var cardsRanking = "123456789JQK";
  var points = [];
  var i;

  controlErrors(hand);

  for (i=0; i<hand.length; i++) {
    points.push(0);
  }

  for (i=0 ; i < hand[0].length; i++) { 
    gamearray=buildGame(i);
    addPoints(gamearray);
    console.log(points);
    }; 

  return finalResult(points);

  function buildGame(g) {
    game = [];
    for (j=0; j < hand.length; j++) {
      game.push(hand[j][g]);
    }
    console.log(game);
    return game;
  }

  function finalResult(points) {
    stringResult = "Players: ";
    for (i=0; i<points.length; i++){
      stringResult += (i+1) + "=>"+ points[i] + " points ";
    }
    return stringResult;
  }

  function controlErrors(hand) {
    if ((!hand) || !(hand instanceof Array) || (hand.length == 0)){
      throw("Error, there are no cards to judge.");
    }; 
    for (i=0; i<hand.length; i++) {
      if (!(hand[i] instanceof Array) || !hand[i] || (hand[i].length == 0)) {
        throw("Error, there are no cards to judge.");
      };

    };
  }

  function addPoints(cards) {
    var i;
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

  it("wins with three players", function(){
    expect(whoWins([['1'],['Q'],['1']])).toEqual("Players: 1=>0 points 2=>1 points 3=>0 points ");
    expect(whoWins([['K'],['Q'],['1']])).toEqual("Players: 1=>1 points 2=>0 points 3=>0 points ");
    expect(whoWins([['1'],['2'],['K']])).toEqual("Players: 1=>0 points 2=>0 points 3=>1 points ");
  });

  it('Should return an error if there are no cards in the hands', function(){
    expect(function(){whoWins()}).toThrow('Error, there are no cards to judge.');
    expect(function(){whoWins([],[])}).toThrow('Error, there are no cards to judge.');
    expect(function(){whoWins(null,null)}).toThrow('Error, there are no cards to judge.');
  });

});

