let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(function(word){
  return word[0] === 'b'
})

console.log(bListAnimals)