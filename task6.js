const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

console.log(broomCupboard.sort((a, b) => a - b));


const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];
console.log(potions.sort((a, b) => b.shelf - a.shelf));


const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

const sortByLastName = (arr) => {
  const sortedStudents = [];
  arr.forEach(student => {
    [first, last] = student.split(' ');
    sortedStudents.push(`${last} ${first}`);
  });
  sortedStudents.sort();
  sortedStudents.forEach((student, i) => {
    [last, first] = student.split(' ');
    sortedStudents[i] = (`${first} ${last}`);
  });
  return sortedStudents;
}
console.log(sortByLastName(students));


// sort by last name refactored using localeCompare
students.sort((student1, student2) => {
  const [_first1, last1] = student1.split(' ');
  const [_first2, last2] = student2.split(' ');
  return last1.localeCompare(last2);
});
console.log(students);