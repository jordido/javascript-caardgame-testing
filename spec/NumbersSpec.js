function Numbers(param) {
  console.log("numbers1:: ");
  console.log(param);
  param.atr1 = "ATR2";
  console.log("numbers2:: ");
  console.log(param);
  return param;
};

function Strings(param) {}



describe("Numbers", function() {
  var obj = {};

  beforeEach(function() {
  
  });

  it("should change variable attribute ", function() {
    x = obj;
    x.atr1 = "ATR1";
    expect(obj.atr1).toEqual("ATR1");
  });

  it("should behave the same with functions", function() {
    var obj = {};
    x = obj;
    x.atr1 = "ATR1";
    expect(Numbers(x.atr1)).toEqual("ATR1");
  });

   it("should change the attr inside the function", function() {
    var obj = {};
    x = obj;
    x.atr1 = "ATR1";
    expect(Numbers(x).atr1).toEqual("ATR2");
  });

   it("shouldnt change an string inside the function", function() {
    var str = "hola";
    Strings(str);
  
    expect(str).toEqual("hola");
  });

context = describe;

describe("the JavaScript language", function(){

  describe("different objects respond in different ways when passed as arguments", function(){
    it("modifies the properties of an object when it is passed in to a function", function(){
        obj = { name: "Emily"};

        myFunction = function(object) {
            object.name = "Hi!";
        }

        myFunction(obj);

        expect(obj.name).toEqual("Hi!");
    });

    it("an object property can be defined within a function", function(){
        obj = {};

        myFunction = function(object) {
            object.city = "Seattle";
        }

        myFunction(obj);

        expect(obj.city).toEqual("Seattle");
    });

    it("an object can not be overwritten within function", function(){
        obj = { name: "Emily" };

        myFunction = function(object) {
            object = {};
        }

        myFunction(obj);

        expect(obj).toEqual({ name: "Emily" });
    });






















































































    it("modifies the properties of an array when it is passed in to a function", function(){
        array = [1, 2, 3];

        myFunction = function(array) {
            array[0] = "Hi!";
        }

        myFunction(array);

        expect(array[0]).toEqual("Hi!");
    });

    it("does not modify a variable when passed in to a function", function(){
        var myVar = 10;

        myFunction = function(arg) {
            arg = 7;
        }

        myFunction(myVar);

        expect(myVar).toEqual(10);
    });

    it("does not modify a function when it is passed in to a function", function(){
        function_one = function(){
            return 'a';
        }

        function_two = function(a_function) {
            a_function = function(){
                return 'b';
            }
        }

        function_two(function_one);

        expect(function_one()).toEqual('a');
    });
  });
});
});
