// Put your code here



const names = [
  "Fort Smith", "Mena", "Acorn", "The back yard", "Earth",
  "Nashville", "San Diego", "The Walmart", "The Great Wall of China"
];

console.log("All Names");

for (const name of names) {
  console.log(name)
}

console.log("------------------------");
console.log("-------The Names----------");

const theNames = names.filter((name) => {
  if (name.startsWith("The")) {
    return name
  }
});
console.log(theNames)

for (const name of theNames) {
  console.log(name)
}