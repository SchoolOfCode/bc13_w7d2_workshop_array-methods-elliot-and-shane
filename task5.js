let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];

queue.push("catHorse");
queue.shift(0);
queue.unshift("owlDoknkey");
queue.pop();
queue.splice(4, 1);
console.log(queue);
console.log(queue.concat(unofficialQueue));


