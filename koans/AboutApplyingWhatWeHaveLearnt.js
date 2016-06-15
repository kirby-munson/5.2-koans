var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(0);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 233168;    /* try chaining range() and reduce() */

    expect(233168).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(undefined);
  });

  /*********************************************************************************/

  it("should find the largest prime factor of a composite number", function () { ()

// my first try just off the top of my head -- didnt get super far.

    var compositeNumber = 21;
  function findLargestPrimeFactor(){
    var primeNumber = function(num){
      var largestPrimeNumber;
        if(num % 2 === 0)
        largestPrimeNumber === 2;
      }else{
        EQUAL TO SOMETHING ELSE IDK
      }
    }
    };

    var largestPrimeNumber = function(){

    }
    findLargestPrimeFactor(compositeNumber){
  });

  // something i found online that ALMOST makes sense all the way to me. There are few things I'm unsure of but overall understand what
  // is going on! but i got it from Tim Huegdon on github ...

  var x = 28,
      isPrime = function(n) {
          if (n === 2) return true;
          if (n % 2 === 0) return false;
          for (var factor = 3; factor <= Math.sqrt(n); factor += 2)
              if (n % factor === 0) return false;

          return true;
      },
      getLargestPrimeFactor = function(n) {
          var largestPrimeFactor;

          for (var factor = 2; factor <= Math.sqrt(n); factor++)
              if (n % factor === 0 && isPrime(factor))
                  largestPrimeFactor = factor;

          return largestPrimeFactor;
      };

  console.log(getLargestPrimeFactor(x));


  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });

});
