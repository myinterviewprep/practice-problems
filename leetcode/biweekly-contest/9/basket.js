/**
 * @param {number[]} arr
 * @return {number}
 */
var maxNumberOfApples = function(arr) {
    var basket = 0;
    var numApples = 0;
    var inBasket = new Set();
    arr.sort(function(a,b){return a-b});
    arr.forEach(function(apple, i){
        console.debug(`apple[${i}]: ${apple}`);
        console.debug("basket:", basket)
        console.debug("numApples:", numApples)
        console.debug("inBasket:", inBasket)
       if(basket+apple<=5000){
           basket=basket+apple; 
           numApples++; 
           inBasket.add(i);
       }
    });
    
    
    console.log(numApples);
    return numApples;
};

var input = [900,950,800,1000,700,800];
maxNumberOfApples(input);