// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  if (currency <= 0) return {};
  
  let numObject = {};
  let coins = ["H", "Q", "D", "N", "P"];
  let arr = [50, 25, 10, 5, 1];
  for (let i = 0; i < 5; i++){
        if (Math.floor(currency / arr[i]) != 0){
          numObject[coins[i]] = Math.floor(currency / arr[i]);
          currency -= arr[i] * Math.floor(currency / arr[i]);
        }
      }
  return numObject;
}
